const menuBtn = document.querySelector ('.navButton');
let menuOpen = false;


const showMenu = document.querySelector ('.navButtonClick')
const displayFlex = "flex";
const displayNone = "none";

menuBtn.addEventListener('click', () => {
 if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    showMenu.style.display = displayFlex;
    
 } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    showMenu.style.display = displayNone;
    
 }
});
var elem = document.createElement('link');
    elem.rel = 'stylesheet'
    elem.href = 'https://escuela.cacmu.fin.ec/pluginfile.php/14692/course/section/1061/style.csss'; //Link do css
    document.head.appendChild(elem);





   const iframeResize = document.querySelector('.h5pSlider') 
    (function(){
       if(!window.postMessage||!window.addEventListener||window.h5pResizerInitialized)
            {return;}
         window.h5pResizerInitialized=true;
      var actionHandlers={};actionHandlers.hello=function(iframeResize,data,respond)
         {iframeResize.style.width='100%';iframeResize.getBoundingClientRect();
            var resize=function()
               {if(iframeResize.contentWindow){respond('resize');
            } else{window.removeEventListener('resize',resize);
         }
      };
            window.addEventListener('resize',resize,false);respond('hello');
         };actionHandlers.prepareResize=function(iframe,data,respond)
         {if(iframe.clientHeight!==data.scrollHeight||data.scrollHeight!==data.clientHeight){iframe.style.height=data.clientHeight+'px';respond('resizePrepared');}
      };actionHandlers.resize=function(iframe,data)
      {iframe.style.height=data.scrollHeight+'px';};
      var escape=function(event)
      {if(event.keyCode===27){exitFullScreen();}
   };window.addEventListener('message',function receiveMessage(event)
   {if(event.data.context!=='h5p'){return;}
      var iframe,iframes=document.getElementsByTagName('iframe');
         for(var i=0;i<iframes.length;i++)
            {if(iframes[i].contentWindow===event.source)
               {iframe=iframes[i];break;}
            }
            if(!iframe){return;
            }
            if(actionHandlers[event.data.action])
            {actionHandlers[event.data.action]
               (iframe,event.data,function respond(action,data)
               {if(data===undefined){data={};
            }
            data.action=action;
            data.context='h5p';
            event.source.postMessage(data,event.origin);});}},false);
            var iframes=document.getElementsByTagName('iframe');
            var ready={context:'h5p',action:'ready'};for(
               var i=0;i<iframes.length;i++)
               {if(iframes[i].src.indexOf('h5p')!==-1){iframes[i].contentWindow.postMessage(ready,'*');}}})();