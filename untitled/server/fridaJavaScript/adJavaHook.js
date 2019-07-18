if(Java.available) {{
    Java.perform(function () {{
        var application = Java.use('android.app.Application');

        application.attach.overload('android.content.Context').implementation = function (context) {{

            var result = this.attach(context);
            var classloader = context.getClassLoader();
            Java.classFactory.loader = classloader;

            var ClassName = Java.classFactory.use("{full_class_name}");
            send("ClassName:" + ClassName);


            ClassName.{funcname}.implementation = function (arg) {{
                {log_code}
            }}

        }}
    }});
}}