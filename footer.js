var imagens = $(".corpopost a").filter(':has(img)');
for (var i = 0; i < imagens.length; i++) {
    imagens[i].removeAttribute("href");

}

var makeCRCTable = function(){
var c;
var crcTable = [];
for(var n =0; n < 256; n++){
c = n;
for(var k =0; k < 8; k++){
c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
}
crcTable[n] = c;
}
return crcTable;
}
var crc32 = function(str) {
var crcTable = window.crcTable || (window.crcTable = makeCRCTable());
var crc = 0 ^ (-1);
for (var i = 0; i < str.length; i++ ) {
crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
}
return (crc ^ (-1)) >>> 0;
};
	function do_email(){
		var dec = CryptoJS.AES.decrypt("U2FsdGVkX1+tt4lMfk0xcphuNDd1EFzND0mkeKVtTRzVwAeSUnabDiXtdWu/0dx3", prompt("Entre com a senha (meu apelido)")).toString(CryptoJS.enc.Utf8);
		if(crc32(dec) == 3369190449){
			alert(dec);
		}
		else{
			alert("Senha errada");
		}
	}
