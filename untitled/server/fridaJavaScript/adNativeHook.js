var moduleAddr = Module.findBaseAddress("{moduleName}");
var instruction = "{instruction}";
if(instruction == ARM){{
    var funcAddr = prt(moduleAddr.toInt32()+{funcoffset});
    Interceptor.attach(funcAddr,{{
        onEnter: function (args) {{
            {enlogcode}
        }},
        onLeave: function (retval) {{
            {lelogcode}

        }}
    }});

}}else {{
    var funcAddr = prt(moduleAddr.toInt32()+{funcOffset}+1);
    Interceptor.attach(funcAddr,{{
        onEnter: function (args) {{
            {enlogcode}
        }},
        onLeave: function (retval) {{
            {lelogcode}

        }}
    }});
    
}}