const toggleInfo = document.querySelector("#info-btn");
const info = document.querySelector(".information-content");
const infoLayer = document.querySelector(".info-layer");
const mainHeight = $(info).height();

$(function () {
  setTimeout(() => {
    $(".loadingPage").css("opacity", "0");
    $(".loadingPage").css("z-index", "-1111");
    $("body").css("overflow", "auto");
    $("body").css("hight", "auto");
  }, 0);
  toggleInfo.addEventListener("click", () => {
    if ($(info).height() <= 650) {
      info.style.cssText = "height: 100% !important; overflow: visible; ";
      infoLayer.style.cssText = "opacity: 0;";
      $(toggleInfo)
        .find("i")
        .removeClass("fa-arrow-down")
        .addClass("fa-arrow-up");
    } else {
      info.style.cssText = `height: ${mainHeight}px !important; overflow: hidden; `;
      infoLayer.style.cssText = "opacity: 1;";
      $(toggleInfo)
        .find("i")
        .removeClass("fa-arrow-up")
        .addClass("fa-arrow-down");
    }
  });
});
ScrollReveal().reveal(".logo", {
  delay: 100,
  origin: "left",
  distance: "200px",
  reset: true,
});
ScrollReveal().reveal(".nav-link", {
  delay: 180,
  origin: "top",
  distance: "150px",
  reset: true,
});

ScrollReveal().reveal(".nav", {
  delay: 250,
  origin: "right",
  distance: "350px",
  reset: true,
});

ScrollReveal().reveal(".home-content", {
  delay: 150,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".hero-img", {
  delay: 250,
  origin: "bottom",
  distance: "250px",
  reset: true,
});

ScrollReveal().reveal(".download-app", {
  delay: 200,
  origin: "left",
  distance: "350px",
  reset: true,
});

ScrollReveal().reveal(".title-shape", {
  delay: 200,
  origin: "right",
  distance: "150px",
  reset: false,
});
ScrollReveal().reveal(".information-content h6", {
  delay: 200,
  origin: "right",
  distance: "250px",
  reset: true,
});
ScrollReveal().reveal(".info-content", {
  delay: 200,
  origin: "bottom",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".section-two-img", {
  delay: 150,
  origin: "bottom",
  distance: "250px",
  reset: true,
});
ScrollReveal().reveal(".get-price-sub", {
  delay: 200,
  origin: "right",
  distance: "250px",
  reset: false,
});

ScrollReveal().reveal(".sub-title", {
  delay: 200,
  origin: "right",
  distance: "250px",
  reset: false,
});

ScrollReveal().reveal(".sub-p", {
  delay: 200,
  origin: "bottom",
  distance: "50px",
  reset: false,
});
ScrollReveal().reveal(".price-sp", {
  delay: 200,
  origin: "bottom",
  distance: "50px",
  reset: false,
});
ScrollReveal().reveal(".download-app-form-sub", {
  delay: 200,
  origin: "right",
  distance: "200px",
  reset: false,
});

ScrollReveal().reveal(".mobile-video", {
  delay: 200,
  origin: "bottom",
  distance: "200px",
  reset: false,
});

ScrollReveal().reveal(".use-card", {
  delay: 200,
  origin: "right",
  distance: "300px",
  reset: false,
});

ScrollReveal().reveal(".uses-img", {
  delay: 200,
  origin: "bottom",
  distance: "400px",
  reset: false,
});
ScrollReveal().reveal(".sections-row", {
  delay: 200,
  origin: "bottom",
  distance: "400px",
  reset: false,
});

ScrollReveal().reveal(".customers-card", {
  delay: 200,
  origin: "bottom",
  distance: "400px",
  reset: false,
});

ScrollReveal().reveal(".footer-links h5 ", {
  delay: 200,
  origin: "right",
  distance: "200px",
  reset: false,
});
ScrollReveal().reveal(".footer-links a ", {
  delay: 250,
  origin: "bottom",
  distance: "150px",
  reset: false,
});
ScrollReveal().reveal(".footer-contact h5 ", {
  delay: 200,
  origin: "right",
  distance: "200px",
  reset: false,
});
ScrollReveal().reveal(".footer-contact a ", {
  delay: 250,
  origin: "right",
  distance: "150px",
  reset: false,
});
ScrollReveal().reveal(".footer-contact p ", {
  delay: 250,
  origin: "right",
  distance: "150px",
  reset: false,
});
ScrollReveal().reveal(".footer-img img ", {
  delay: 250,
  origin: "top",
  distance: "350px",
  reset: false,
});
ScrollReveal().reveal(".footer-copyright p ", {
  delay: 200,
  origin: "bottom",
  distance: "50px",
  reset: false,
});
