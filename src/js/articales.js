const articals=document.querySelectorAll(".articale"),articalBtns=document.querySelectorAll(".articaleInnerBtn button"),articaleContainer=document.querySelectorAll(".articaleBtn"),homeSection=document.querySelector("#home");$((function(){setTimeout((()=>{$(".loadingPage").css({opacity:"0","z-index":"-1111"}),$("body").css({overflow:"auto",height:"auto"})}),0)})),articalBtns.forEach((e=>{e.addEventListener("click",(e=>{window.scrollTo(0,homeSection.offsetTop+homeSection.clientHeight),articalBtns.forEach((e=>{e.classList.remove("articaleBtnActive")}));const t=e.target.getAttribute("to");e.target.classList.add("articaleBtnActive"),articals.forEach((e=>{e.getAttribute("id")===t?(e.classList.remove("d-none"),e.classList.add("d-block")):(e.classList.remove("d-block"),e.classList.add("d-none"))})),articaleContainer.forEach((e=>{e.classList.remove("articaleBtnActive"),e.classList.contains(`to-${t}`)&&e.classList.add("articaleBtnActive")}))}))})),ScrollReveal().reveal(".logo",{delay:100,origin:"left",distance:"200px",reset:!0}),ScrollReveal().reveal(".nav-link",{delay:100,origin:"top",distance:"150px",reset:!0}),ScrollReveal().reveal(".nav",{delay:100,origin:"right",distance:"150px",reset:!0}),ScrollReveal().reveal(".home-content",{delay:100,origin:"right",distance:"150px",reset:!0}),ScrollReveal().reveal(".hero-img",{delay:250,origin:"bottom",distance:"250px",reset:!0}),ScrollReveal().reveal(".download-app",{delay:100,origin:"left",distance:"150px",reset:!1}),ScrollReveal().reveal(".title-shape",{delay:100,origin:"right",distance:"150px",reset:!0}),ScrollReveal().reveal(".articaleBtn",{delay:150,origin:"left",distance:"200px",reset:!1}),ScrollReveal().reveal(".articale-img",{delay:100,origin:"bottom",distance:"200px",reset:!0}),ScrollReveal().reveal(".footer-links h5",{delay:100,origin:"right",distance:"200px",reset:!0}),ScrollReveal().reveal(".footer-links a",{delay:150,origin:"bottom",distance:"150px",reset:!0}),ScrollReveal().reveal(".footer-contact h5",{delay:100,origin:"right",distance:"200px",reset:!0}),ScrollReveal().reveal(".footer-contact a",{delay:150,origin:"right",distance:"150px",reset:!0}),ScrollReveal().reveal(".footer-contact p",{delay:150,origin:"right",distance:"150px",reset:!0}),ScrollReveal().reveal(".footer-img img",{delay:150,origin:"top",distance:"350px",reset:!0}),ScrollReveal().reveal(".footer-copyright p",{delay:100,origin:"bottom",distance:"50px",reset:!0});