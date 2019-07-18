Java.perform(
    function(){
        Java.enumerateLoadedClasses({
            onMatch: function (classname) {
                send("classname: " + classname);
                
            },
            onComplete: function () {
                
            }
        })
    }
) 