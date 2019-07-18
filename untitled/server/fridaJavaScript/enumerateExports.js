var exprots;
exprots = Module.enumerateExports("{modulename}");
exprots.forEach(
    function(m){{
    send("name: " + m.name + "--" + "address: " + m.address);


}}
);