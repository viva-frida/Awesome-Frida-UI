if (ObjC.available)
{{
    try
    {{
        var className = "{className}";
        var funcName = "{funcName}";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {{
          onEnter: function(args) {{
              {enlogcode}
          }},
          onLeave: function(retval) {{
              {lelogcode}
          }}
        }});
    }}
    catch(err)
    {{
        send("[!] Exception2: " + err.message);
    }}
}}
else
{{
    send("Objective-C Runtime is not available!");
}}