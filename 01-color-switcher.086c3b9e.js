!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");t.classList.add("btn"),e.classList.add("btn");var a=null;t.addEventListener("click",(function(){a=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),50),t.disabled||(t.setAttribute("disabled",!0),e.removeAttribute("disabled",!1))})),e.addEventListener("click",(function(){clearInterval(a),e.disabled||(e.setAttribute("disabled",!0),t.removeAttribute("disabled",!1))}))}();
//# sourceMappingURL=01-color-switcher.086c3b9e.js.map
