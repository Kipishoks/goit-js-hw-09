const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=!0,o=null;t.addEventListener("click",(function(){n&&(n=!1,t.disabled=!0,o=setInterval((t=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3))})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1;n=!0}));
//# sourceMappingURL=01-color-switcher.0a7a2e48.js.map
