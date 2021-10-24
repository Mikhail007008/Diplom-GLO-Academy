(()=>{"use strict";(()=>{const t=document.querySelector(".top-menu"),e=t.querySelectorAll("li>a"),s=document.querySelector(".mobile-menu"),o=s.querySelectorAll("li>a"),i=document.querySelector(".up");i.style.visibility="hidden",document.addEventListener("scroll",(()=>{let t=window.scrollY;i.style.visibility=t>600?"visible":"hidden"}));const n=t=>{window.scroll({left:0,top:t.offsetTop,behavior:"smooth"})},l=()=>{s.classList.toggle("active-menu")},r=(t,e)=>{e.preventDefault();let s=t.getAttribute("href");n(document.querySelector(s))};document.addEventListener("click",(s=>{let a=s.target;e.forEach((t=>{t===a&&r(t,s)})),a!==s.target.closest(".mob-menu-btn")&&a!==s.target.closest(".mobile-menu-close")&&a!==s.target.closest(".callback-mobile")||l(),o.forEach((t=>{t===a&&(r(t,s),l())})),i===a&&n(t)}))})(),(()=>{const t=document.querySelectorAll(".item"),e=document.querySelectorAll(".table");let s,o=0;e.forEach((t=>{t.style="\n\t\topacity: 0.9;\n\t\tvisibility: visible;"}));const i=()=>{t[o].style.display="none",o++,o>=t.length&&(o=0),t[o].style.display="block"};((t=3e3)=>{s=setInterval(i,t)})()})(),new class{constructor({main:t,wrap:e,next:s,prev:o,infinity:i=!1,position:n=0,slidesToShow:l=3,responsive:r=[]}){t&&e||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(t),this.wrap=document.querySelector(e),this.slides=document.querySelector(e).children,this.next=document.querySelector(s),this.prev=document.querySelector(o),this.slidesToShow=l,this.options={position:n,infinity:i,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=r}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next,this.controlSlider(),this.responsive&&this.responsiveInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const t of this.slides)t.classList.add("glo-slider__item")}addStyle(){let t=document.getElementById("sliderCarousel-style");t||(t=document.createElement("style"),t.id="sliderCarousel-style"),t.textContent=`\n\t\t\t\t.glo-slider{\n\t\t\t\t\toverflow: hidden !important;\n\t\t\t\t}\n\t\t\t\t.glo-slider__wrap{\n\t\t\t\t\tdisplay: flex !important;\n\t\t\t\t\ttransition: transform 0.5s !important;\n\t\t\t\t\twill-change: transform !important;\n\t\t\t\t}\n\t\t\t\t.glo-slider__item{\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tflex: 0 0 ${this.options.widthSlide}% !important;\n\t\t\t\t\tmargin: auto 0 !important;\n\t\t\t\t}\n\t\t\t`,document.head.appendChild(t)}controlSlider(){this.next.addEventListener("click",this.nextSlider.bind(this)),this.prev.addEventListener("click",this.prevSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}responsiveInit(){const t=this.slidesToShow,e=this.responsive.map((t=>t.breakpoint)),s=Math.max(...e),o=()=>{const o=document.documentElement.clientWidth;if(o<s)for(let t=0;t<e.length;t++)o<e[t]&&(this.slidesToShow=this.responsive[t].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=t,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};o(),window.addEventListener("resize",o)}}({main:".services-elements",wrap:".services-carousel",next:".arrow-right",prev:".arrow-left",slidesToShow:3,infinity:!0,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init(),(()=>{const t=document.querySelector(".modal-callback"),e=t.querySelectorAll("input"),s=document.createElement("style"),o=document.createElement("div");o.style.cssText="font-size: 2rem; color: #000; text-align: center; font-family: Helios;\n\t\tfont-weight: bold;\n\t}",s.textContent="\n\t\tinput.success {\n\t\t\tborder: 2px solid green\n\t\t}\n\t\tinput.error {\n\t\t\tborder: 2px solid red\n\t\t}\n\t\t.validator-error {\n\t\t\tfont-size: 12px;\n\t\t\tfont-family: sans-serif;\n\t\t\tcolor: red;\n\t\t\tmargin-top: -15px;\n\t}",document.head.appendChild(s),e.forEach((t=>t.addEventListener("input",(()=>(t=>{const e=t=>{if(t.classList.remove("success"),t.classList.add("error"),t.nextElementSibling&&t.nextElementSibling.classList.contains("validator-error"))return;const e=document.createElement("div");e.textContent="Ошибка в этом поле",e.classList.add("validator-error"),t.insertAdjacentElement("afterEnd",e)},s=t=>{t.classList.remove("error"),t.classList.add("success"),t.nextElementSibling&&t.nextElementSibling.classList.contains("validator-error")&&t.nextElementSibling.remove("validator-error")};"tel"===t.getAttribute("name")?t.value&&/([0-9\+\(\)\- ]){18}/.test(t.value)?s(t):e(t):"fio"===t.getAttribute("name")&&(t.value&&/[а-яА-Я ]/.test(t.value)?s(t):e(t))})(t))))),window.addEventListener("DOMContentLoaded",(()=>{function t(t){let e="+7 (___) ___-__-__",s=0,o=e.replace(/\D/g,""),i=this.value.replace(/\D/g,"");o.length>=i.length&&(i=o),this.value=e.replace(/./g,(function(t){return/[_\d]/.test(t)&&s<i.length?i.charAt(s++):s>=i.length?"":t})),"blur"===t.type?2===this.value.length&&(this.value=""):((t,e)=>{if(e.focus(),e.setSelectionRange)e.setSelectionRange(t,t);else if(e.createTextRange){const s=e.createTextRange();s.collapse(!0),s.moveEnd("character",t),s.moveStart("character",t),s.select()}})(this.value.length,this)}const e=document.querySelector(".tel");e.addEventListener("input",t),e.addEventListener("focus",t),e.addEventListener("blur",t)})),t.addEventListener("submit",(t=>{let s=t.target;if(s.matches("form")&&!document.querySelector(".validator-error")){t.preventDefault(),s.appendChild(o),o.textContent="Идёт отправка";const n=new FormData(s);let l={};n.forEach(((t,e)=>l[e]=t)),i(l).then((t=>{if(200!==t.status)throw new Error("status network not 200");o.textContent="Отправлено!",setTimeout((()=>{o.textContent="",document.querySelector(".modal-overlay").style.display="none",document.querySelector(".modal-callback").style.display="none"}),3e3),e.forEach((t=>{t.getAttribute("name")&&(t.value="",t.classList.remove("success"))}))})).catch((t=>{o.textContent="Ошибка",console.error(t)}))}else t.preventDefault()}));const i=t=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})})(),(()=>{const t=document.querySelector(".modal-callback"),e=document.querySelectorAll(".callback-btn"),s=document.querySelector(".modal-overlay"),o=document.querySelector(".services-elements"),i=o.querySelectorAll(".absolute"),n=o.querySelectorAll(".img-wrapper"),l=()=>{s.style.display="block",t.style.display="block"};document.addEventListener("click",(o=>{let r=o.target,a=r.closest(".element");e.forEach((t=>{r===t&&l()})),i.forEach((t=>{r===t&&l()})),a&&n.forEach((t=>{t===r&&l()})),r.closest(".button-services")&&l(),(r.closest(".modal-close")||r.closest(".modal-overlay"))&&(s.style.display="none",t.style.display="none")}))})(),(()=>{const t=document.querySelector(".accordeon"),e=t.querySelectorAll(".element"),s=t.querySelectorAll(".element-content"),o=()=>{e.forEach((t=>{t.classList.remove("active")})),s.forEach((t=>{t.style.display="none"}))};o(),t.addEventListener("click",(t=>{let i=t.target;i=i.closest(".element"),i&&e.forEach(((t,n)=>{t===i&&((t=>{for(let o=0;o<s.length;o++)t===o?(e[o].classList.add("active"),s[o].style.display="block"):(e[o].classList.remove("active"),s[o].style.display="none")})(n),setTimeout((()=>o()),1e4))}))}))})()})();