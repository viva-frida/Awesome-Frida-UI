var moduleInfo;
moduleInfo = Process.findModuleByName("{modulename}");
send("baes: "+ moduleInfo.base + "--"+ "path: "+ moduleInfo.path + "--"+ "size "+ moduleInfo.size );
