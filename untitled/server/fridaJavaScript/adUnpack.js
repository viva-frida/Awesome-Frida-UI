var dexfile = "_ZN3art7DexFileC2EPKhjRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEjPKNS_10OatDexFileE";
var dexAddr = Module.findExportByName('libart.so',dexfile);
if(dexAddr != undefined){
	Interceptor.attach(dexAddr,{
		onEnter: function(args){
			send("Unpack start");
			send("base:"+args[1]);
			send("size:"+args[2].toInt32());
			// console.log(hexdump(
			// 	args[1],{
			// 		offset: 0,
			// 		length: 64,
			// 		header: true,
			// 		ansi: true
			// 	}
			//
			//
			// 	));
			var begin = args[1];
			send("magic : " + Memory.readUtf8String(begin))
			var address = parseInt(begin,16) + 0x20;
			var dex_size = Memory.readInt(ptr(address));
			send("dex_size :" + dex_size);
			var file = new File("/sdcard/" + dex_size + ".dex", "wb");
			file.write(Memory.readByteArray(begin, dex_size));
			file.flush();
			file.close();

		},
		onLeave: function(retval){
			send("Unpack successful!")

		}
	});

}