
getRem(750,100)
window.onresize = function(){
    getRem(750,100)
};
window._agl = window._agl || [];
        (function () {
            _agl.push(
                ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
            );
            (function () {
                var agl = document.createElement('script');
                agl.type = 'text/javascript';
                agl.async = true;
                agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(agl, s);
            })();
        })();
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    var htmlSize = oWidth/pwidth*prem;
    if (htmlSize>=100){
        htmlSize=100;
    }
    html.style.fontSize = htmlSize + "px";
}



