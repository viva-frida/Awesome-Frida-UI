var importsName;
importsName = Module.enumerateImports("{modulename}");
importsName.forEach(
    function(m){{
        send("name: " + m.name + "--" + "address: " + m.address);
    }}
);
