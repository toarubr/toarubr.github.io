var imagens = $(".corpopost a").filter(':has(img)');
for (var i = 0; i < imagens.length; i++) {
    imagens[i].removeAttribute("href");
}

function mostra_disqus() {
    var disqus_config = function() {
        this.page.url = "<data:blog.canonicalUrl />";
        this.page.identifier = "<data:post.id />";
    };
    (function() {
        var d = document,
            s = d.createElement('script');
        s.src = 'https://toaru.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
}
