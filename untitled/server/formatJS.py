def formatOrJavaHook(classname,funcname,enlogcode):
    with open('./server/fridaJavaScript/orJavaHook.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            full_class_name = classname,
            method_name = funcname,
            log_code = enlogcode
        )
        return data

def formatOrNativeHook(moduleName,exportName,enlogcode,lelogcode):
    with open('./server/fridaJavaScript/orNativeHook.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            moduleName = moduleName,
            exportName = exportName,
            enlogcode = enlogcode,
            lelogcode = lelogcode
        )
        return data


def formatAndroidTrace(classfuncname,modulefuncname):
    with open('./server/fridaJavaScript/androidTrace.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            classfuncname = classfuncname,
            modulefuncname = modulefuncname
        )
        return data


def formatAdJavaHook(classname, funcname, enlogcode):
    with open('./server/fridaJavaScript/adNativeHook.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            full_class_name = classname,
            funcname = funcname,
            log_code = enlogcode
        )
        return data


def formatAdNativeHook(moduleName, instruction, funcoffset, enlogcode, lelogcode):
    with open('./server/fridaJavaScript/adJavaHook.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            moduleName = moduleName,
            instruction = instruction,
            funcOffset = funcoffset,
            enlogcode = enlogcode,
            lelogcode = lelogcode
        )
        return data

def formatIosFuncHook(classname,funcname,enlogcode,lelogcode):
    with open('./server/fridaJavaScript/iosFuncHook.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            className = classname,
            funcName = funcname,
            enlogcode =enlogcode,
            lelogcode = lelogcode

        )
        return data

def formatFindModuleByName(modulename):
    with open('./server/fridaJavaScript/FindModuleByName.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            modulename = modulename

        )
        return data

def formatEnumerateImports(modulename):
    with open('./server/fridaJavaScript/enumerateImports.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            modulename = modulename

        )
        return data

def formatEnumerateExports(modulename):
    with open('./server/fridaJavaScript/enumerateExports.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            modulename = modulename

        )
        return data

def formatFindExportByName(modulename,exportname):
    with open('./server/fridaJavaScript/findExportByName.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            modulename = modulename,
            exportname = exportname

        )
        return data

def formatFindBaseAddress(modulename):
    with open('./server/fridaJavaScript/findBaseAddress.js', "r", encoding="utf-8") as f:
        data = f.read()
        data = data.format(
            modulename = modulename,

        )
        return data