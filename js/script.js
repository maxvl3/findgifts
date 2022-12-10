const link = document.referrer;
console.log(link);

function terug(){
    if (link.match("/index.html")){
        window.history.back()
    }
    if (link.match("/blogs.html")){
        window.history.back()
    } else{
        window.location.replace("/index.html");
    }
}