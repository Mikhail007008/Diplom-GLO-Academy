(()=>{"use strict";(()=>{const e=document.querySelector(".top-menu").querySelectorAll("li>a");document.addEventListener("click",(t=>{let l=t.target;e.forEach((e=>{if(t.preventDefault(),e===l){let t=e.getAttribute("href");o=document.querySelector(t),window.scroll({left:0,top:o.offsetTop,behavior:"smooth"})}var o}))}))})(),(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelectorAll(".callback-btn"),l=document.querySelector(".modal-overlay");document.addEventListener("click",(o=>{let c=o.target;t.forEach((t=>{c===t&&(l.style.display="block",e.style.display="block")})),(c.closest(".modal-close")||c.closest(".modal-overlay"))&&(l.style.display="none",e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".item"),t=document.querySelectorAll(".table");let l,o=0;t.forEach((e=>{e.style="\n\t\topacity: 0.9;\n\t\tvisibility: visible;"}));const c=()=>{e[o].style.display="none",o++,o>=e.length&&(o=0),e[o].style.display="block"};((e=3e3)=>{l=setInterval(c,e)})()})()})();