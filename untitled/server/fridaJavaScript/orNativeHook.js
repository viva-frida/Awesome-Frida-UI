var moduleAddr = Module.findExportByName("{moduleName}","{exportName}");
send("moduleAddr: "+moduleAddr);
if(moduleAddr != undefined){{
		Interceptor.attach(moduleAddr,{{
        onEnter: function (args) {{
            {enlogcode}
        }},
        onLeave: function (retval) {{
            {lelogcode}

        }}
    }});

}}else{{
	send("Null Point!!!");
}}