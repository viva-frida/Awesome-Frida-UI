#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# @Author: smartdone
# @Date:   2019-06-19 16:56

from server.utils.common import singleton, cmp_to_key, compare_processes, logger
import frida
from frida.core import Device, Session, Script
from _frida import Process
import json
import time
import os


@singleton
class DeviceUtil(object):
    def __init__(self, device_id=None, package_name=None):
        self.device: Device = None
        self.devices = None
        self.device_id: str = None
        self.process: Process = None
        self.package_name: str = None
        self.script: Script = None
        self.script_content: str = None
        self.session: Session = None

        self.messages = []  # 存储脚本send发送的数据

        if device_id:
            self.setup_device(device_id=device_id)
            self.device_id = device_id
            if package_name:
                self.setup_process(package_name=package_name)
                self.package_name = package_name

    # @staticmethod
    # def get_devices():
    #     devices = frida.enumerate_devices()
    #     return devices

    def setup_device(self, device_id: str = None, remote: str = None):  # remote传递格式 127.0.0.1:27042
        if not remote:  # 远程设备
            if not device_id:
                self.device = frida.get_usb_device()
            else:
                self.device = frida.get_device(id=device_id)
        else:  # usb设备
            device_manager = frida.get_device_manager()
            dev = device_manager.add_remote_device(remote)
            self.device = dev
        logger.debug("setup device: name = %s, id = %s" % (self.device.name, self.device.id))

    def setup_process(self, package_name: str):  # 设置当前hook进程
        self.package_name = package_name
        proc: Process = None
        # 判定进程是否存在，不存在就先spawn
        for process in self.enumerate_process():
            _process: Process = process
            if _process.name == package_name:
                proc = _process
                self.session = self.device.attach(proc.pid)
                break
        if not proc:
            pid = self.device.spawn([package_name])
            self.session = self.device.attach(pid)
            self.device.resume(pid)
            time.sleep(1)

            for process in self.enumerate_process():
                _process: Process = process
                if _process.name == package_name:
                    proc = _process
                    self.session = self.device.attach(proc.pid)
                    break

        self.process = proc
        logger.debug("setup process, pid = %d, name = %s" % (proc.pid, proc.name))

    def spawn_process(self, package_name: str):
        proc: Process = None
        pid = self.device.spawn([package_name])
        self.session = self.device.attach(pid)
        self.device.resume(pid)
        time.sleep(1)

        for process in self.enumerate_process():
            _process: Process = process
            if _process.name == package_name:
                proc = _process
                self.session = self.device.attach(proc.pid)
                break

        self.process = proc
        logger.debug("spawn process, pid = %d, name = %s" % (proc.pid, proc.name))

    def spawn_process_and_load_script(self, package_name: str, script_content: str):
        proc: Process = None
        pid = self.device.spawn([package_name])
        self.session = self.device.attach(pid)
        self.script_content = script_content
        self.package_name = package_name
        self.script = self.session.create_script(script_content)
        self.messages.clear()
        self.script.on("message", self.on_message)
        self.script.load()
        logger.debug("load script success")
        self.device.resume(pid)

        for process in self.enumerate_process():
            _process: Process = process
            if _process.name == package_name:
                proc = _process
                break

        self.process = proc
        # logger.debug("spawn process, pid = %d, name = %s" % (proc.pid, proc.name))

    def spawn_process_and_load_script_file(self, package_name: str, script_file: str):
        if os.path.exists(script_file) and os.path.isfile(script_file):
            with open(script_file, mode="r", encoding="utf-8") as f:
                self.script_content = str(f.read())
                self.spawn_process_and_load_script(package_name, self.script_content)
        else:
            logger.error("script file does not exists")

    def enumerate_process(self):
        processes = self.device.enumerate_processes()
        return processes

    def processes_to_json_str(self, _processes=None):  # 进程列表的一个json字符串
        if _processes:
            processes = _processes
        else:
            processes = self.enumerate_process()
        data = []
        for item in sorted(processes, key=cmp_to_key(compare_processes)):
            _item: Process = item
            data.append([_item.pid, _item.name])
        return json.dumps(data)

    def on_message(self, message, data):
        if message['type'] == 'send':
            info = message.get("payload")
            self.messages.append(info)
            logger.debug("receive message: %s" % info)
        else:
            logger.debug("receive message: %s" % message)

    def attach_process_and_load_script(self, script_content: str):
        if script_content:
            self.script_content = script_content
            if not self.process:
                if self.package_name:
                    self.setup_process(self.package_name)
            if self.session:
                if self.script:
                    self.script.unload()

                self.script = self.session.create_script(script_content)
                time.sleep(1)
                self.messages.clear()
                self.script.on("message", self.on_message)
                self.script.load()
                logger.debug("load script success")

    def attach_process_and_load_script_file(self, script_file):
        if os.path.exists(script_file) and os.path.isfile(script_file):
            with open(script_file, mode="r", encoding="utf-8") as f:
                self.script_content = str(f.read())
                self.attach_process_and_load_script(script_content=self.script_content)
        else:
            logger.error("script file does not exists")
