const link = document.referrer;
console.log(link);

function terug(){
    if (link.match("/index")){
        window.history.back()
    }
    if (link.match("/blogs")){
        window.history.back()
    } else{
        window.location.replace("/");
    }
}