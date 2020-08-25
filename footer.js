var imagens = $(".corpopost a").filter(':has(img)');
for (var i = 0; i < imagens.length; i++) {
    imagens[i].removeAttribute("href");

}

$(window).on('resize',function(){ 
  
  if(window.getComputedStyle(document.getElementsByClassName("phantom")[0]).getPropertyValue('visibility') == "visible"){
  if(window.getComputedStyle(document.getElementsByClassName("blog-sidebar")[0]).getPropertyValue('position') != "fixed"){
$(".sidebtn").click();
}
  }
  
});
