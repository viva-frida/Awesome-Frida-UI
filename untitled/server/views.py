from __future__ import unicode_literals
from django.http import HttpResponse
import json
from server import formatJS
from server import fridaFunc
from server.utils.deviceUtils import DeviceUtil
#processname = "what the fuck!!"
def index(request):
    #global processname
    pid = request.POST.get("ppid")
    funcname = request.POST.get("funcname")
    funcaddr = request.POST.get("funcaddr")

        

    return HttpResponse(pid)

def getHookInfo(request):
    deviceutil = DeviceUtil()
    message = deviceutil.messages
    message = json.dumps(message)
    print(message)
    return HttpResponse(message, content_type="application/json,charset=utf-8")




def getProcess(request):
    list = fridaFunc.enmuProcess()

    return HttpResponse(list, content_type="application/json,charset=utf-8")

def onOrUnpack(request):
    processname = request.POST.get("processname")
    if processname:
        deviceutil = DeviceUtil()
        devices = fridaFunc.enmuDevices()
        deviceutil.setup_device(devices)
        deviceutil.spawn_process_and_load_script_file(processname,'./server/fridaJavaScript/orUnpack.js')

        return HttpResponse("OK")

def onAdUnpack(request):
    processname = request.POST.get("processname")
    if processname:
        deviceutil = DeviceUtil()
        devices = fridaFunc.enmuDevices()
        deviceutil.setup_device(devices)
        deviceutil.spawn_process_and_load_script_file(processname,'./server/fridaJavaScript/adUnpack.js')
        return HttpResponse("OK")

def onOrJavaHook(request):
    processname = request.POST.get("processname")
    funcname = request.POST.get("funcname")
    classname = request.POST.get("classname")
    enlogcode = request.POST.get("enlogcode")
    orJavaHookJs = formatJS.formatOrJavaHook(classname,funcname,enlogcode)
    # print(nativeHookJs)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script(orJavaHookJs)
    return HttpResponse("OK")

def onOrNativeHook(request):
    processname = request.POST.get("processname")
    moduleName = request.POST.get("moduleName")
    exportName = request.POST.get("exportName")
    enlogcode = request.POST.get("enlogcode")
    lelogcode = request.POST.get("lelogcode")
    orNativeHookJs = formatJS.formatOrNativeHook(moduleName, exportName, enlogcode, lelogcode)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    # deviceutil.setup_process(processname)
    deviceutil.spawn_process_and_load_script(processname,orNativeHookJs)
    return HttpResponse("OK")

def onAndroidTrace(request):
    processname = request.POST.get("processname")
    classfuncname = request.POST.get("classfuncname")
    modulefuncname = request.POST.get("modulefuncname")
    androidTraceJs = formatJS.formatAndroidTrace(classfuncname,modulefuncname)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.spawn_process_and_load_script(processname,androidTraceJs)
    return HttpResponse("OK")


def onAdJavaHook(request):
    processname = request.POST.get("processname")
    funcname = request.POST.get("funcname")
    classname = request.POST.get("classname")
    enlogcode = request.POST.get("enlogcode")
    onAdJavaHookjs = formatJS.formatAdJavaHook(classname,funcname,enlogcode)
    # print(nativeHookJs)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script(onAdJavaHookjs)
    return HttpResponse("OK")

def onAdNativeHook(request):
    processname = request.POST.get("processname")
    moduleName = request.POST.get("moduleName")
    instruction = request.POST.get("instruction")
    funcoffset = request.POST.get("funcoffset")
    enlogcode = request.POST.get("enlogcode")
    lelogcode = request.POST.get("lelogcode")
    onAdNativeHookjs = formatJS.formatAdNativeHook(moduleName,instruction,funcoffset,enlogcode,lelogcode)
    # print(nativeHookJs)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    # deviceutil.setup_process(processname)
    deviceutil.spawn_process_and_load_script(processname,onAdNativeHookjs)
    return HttpResponse("OK")

def onIosFuncHook(request):
    processname = request.POST.get("processname")
    classname = request.POST.get("classname")
    funcname = request.POST.get("funcname")
    enlogcode = request.POST.get("enlogcode")
    lelogcode = request.POST.get("lelogcode")
    onIosFuncHookJs = formatJS.formatIosFuncHook(classname,funcname,enlogcode,lelogcode)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script(onIosFuncHookJs)
    return HttpResponse("OK")


def enmuModules(request):
    processname = request.POST.get("processname")
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script_file('./server/fridaJavaScript/enmuModules.js')
    return HttpResponse("OK")

def findModuleByName(request):
    processname = request.POST.get("processname")
    modulename = request.POST.get("modulename")
    findModuleByNameJs = formatJS.formatFindModuleByName(modulename)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script(findModuleByNameJs)
    return HttpResponse("OK")

def enumerateImports(request):
    processname = request.POST.get("processname")
    modulename = request.POST.get("modulename")
    enumerateImportsJs = formatJS.formatEnumerateImports(modulename)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script(enumerateImportsJs)
    return HttpResponse("OK")

def enumerateExports(request):
    processname = request.POST.get("processname")
    modulename = request.POST.get("modulename")
    enumerateExportsJs = formatJS.formatEnumerateExports(modulename)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script(enumerateExportsJs)
    return HttpResponse("OK")

def findExportByName(request):
    processname = request.POST.get("processname")
    modulename = request.POST.get("modulename")
    exportname = request.POST.get("exportname")
    findExportByNameJs = formatJS.formatFindExportByName(modulename,exportname)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script(findExportByNameJs)
    return HttpResponse("OK")

def findBaseAddress(request):
    processname = request.POST.get("processname")
    modulename = request.POST.get("modulename")
    findBaseAddressJs = formatJS.formatFindBaseAddress(modulename)
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script(findBaseAddressJs)
    return HttpResponse("OK")

def enumerateLoadedClasses(request):
    processname = request.POST.get("processname")
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script_file('./server/fridaJavaScript/enumLoadedClasses.js')
    return HttpResponse("OK")

def enumerateClassLoaders(request):
    processname = request.POST.get("processname")
    deviceutil = DeviceUtil()
    devices = fridaFunc.enmuDevices()
    deviceutil.setup_device(devices)
    deviceutil.setup_process(processname)
    deviceutil.attach_process_and_load_script_file('./server/fridaJavaScript/enumerateClassLoaders.js')
    return HttpResponse("OK")
