Java.perform(
    function(){
        Java.enumerateClassLoaders({
            onMatch: function (classloaders) {
                send("classloaders: " + classloaders);

            },
            onComplete: function () {

            }
        })
    }
)