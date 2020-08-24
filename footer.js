var imagens = $(".corpopost a").filter(':has(img)');
for (var i = 0; i < imagens.length; i++) {
    imagens[i].removeAttribute("href");

}