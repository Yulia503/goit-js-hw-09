!function(){var t,e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(function(){e.setAttribute("disabled",!0),r.removeAttribute("disabled"),t=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),r.addEventListener("click",(function(){e.removeAttribute("disabled"),r.setAttribute("disabled",!0),clearInterval(t)})),r.disabled=!0}();
//# sourceMappingURL=01-color-switcher.255ae780.js.map