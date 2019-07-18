import frida
import json



'''Enumeration process list'''
def enmuProcess():
    processes = frida.get_usb_device().enumerate_processes()
    application = frida.get_usb_device().enumerate_applications()
    list = []
    # for app in sorted(application, key=cmp_to_key(compare_applications)):
    #     list.append([app.name, app.identifier])
    for process in sorted(processes, key=cmp_to_key(compare_processes)):
        list.append([process.pid, process.name])
        # process = line_format % (process.pid, process.name)
    list = json.dumps(list)
    return list

def attchProcess(processname):
    process = frida.get_usb_device().attch(processname)

def enmuDevices():
    devices = frida.enumerate_devices()

    for device in sorted(devices, key=cmp_to_key(compare_devices)):
        if device.id != 'local' and device.id != 'tcp':

            return device.id




def compare_processes(a, b):
    a_has_icon = a.get_small_icon() is not None
    b_has_icon = b.get_small_icon() is not None
    if a_has_icon == b_has_icon:
        if a.name > b.name:
            return 1
        elif a.name < b.name:
            return -1
        else:
            return 0
    elif a_has_icon:
        return -1
    else:
        return 1

def compare_applications(a, b):
    a_is_running = a.pid != 0
    b_is_running = b.pid != 0
    if a_is_running == b_is_running:
        if a.name > b.name:
            return 1
        elif a.name < b.name:
            return -1
        else:
            return 0
    elif a_is_running:
        return -1
    else:
        return 1
def compare_devices(a, b):
    a_is_running = a.id != 0
    b_is_running = b.id != 0
    if a_is_running == b_is_running:
        if a.name > b.name:
            return 1
        elif a.name < b.name:
            return -1
        else:
            return 0
    elif a_is_running:
        return -1
    else:
        return 1

def cmp_to_key(mycmp):
    "Convert a cmp= function into a key= function"

    class K:
        def __init__(self, obj, *args):
            self.obj = obj

        def __lt__(self, other):
            return mycmp(self.obj, other.obj) < 0

        def __gt__(self, other):
            return mycmp(self.obj, other.obj) > 0

        def __eq__(self, other):
            return mycmp(self.obj, other.obj) == 0

        def __le__(self, other):
            return mycmp(self.obj, other.obj) <= 0

        def __ge__(self, other):
            return mycmp(self.obj, other.obj) >= 0

        def __ne__(self, other):
            return mycmp(self.obj, other.obj) != 0

    return K




