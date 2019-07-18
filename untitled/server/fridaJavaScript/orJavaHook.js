if(Java.available) {{
    Java.perform(function(){{

        var Activity = Java.use("{full_class_name}");

        Activity.{method_name}.implementation = function(args) {{
            {log_code}


        }};

    }});
}}