(function(window){var svgSprite='<svg><symbol id="icon-tubiaokuwenjian-" viewBox="0 0 1024 1024"><path d="M513.152 516.864a213.546667 213.546667 0 0 0 152.106667-63.018667c40.618667-40.618667 63.018667-94.634667 63.018666-152.106666s-22.357333-111.488-63.018666-152.106667c-40.618667-40.661333-94.677333-63.018667-152.106667-63.018667s-111.488 22.357333-152.149333 62.976c-40.618667 40.661333-62.976 94.677333-62.976 152.149334s22.357333 111.488 63.018666 152.106666a213.717333 213.717333 0 0 0 152.106667 63.018667zM673.92 582.613333H352.341333a198.144 198.144 0 0 0-197.888 197.888v124.714667c0 19.882667 16.128 36.010667 36.010667 36.010667H835.84a36.010667 36.010667 0 0 0 36.010667-36.010667v-124.714667a198.144 198.144 0 0 0-197.930667-197.888z" fill="#6fb1f9" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)