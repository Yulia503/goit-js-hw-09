const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let d;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(d)})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.f4357b88.js.map
