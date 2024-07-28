const toggleInfo = document.querySelector("#info-btn");
const info = document.querySelector(".information-content");
const infoLayer = document.querySelector(".info-layer");
const mainHeight = $(info).height();

$(function () {
  setTimeout(() => {
    $(".loadingPage").css("opacity", "0");
    $(".loadingPage").css("z-index", "-1111");
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

ScrollReveal().reveal(".nav-link", {
  delay: 180,
  origin: "top",
  distance: "150px",
  reset: true,
});

ScrollReveal().reveal(".nav", {
  delay: 150,
  origin: "right",
  distance: "150px",
  reset: true,
});

ScrollReveal().reveal(".home-content", {
  delay: 150,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".hero-img", {
  delay: 150,
  origin: "bottom",
  distance: "150px",
  reset: true,
});

ScrollReveal().reveal(".download-app", {
  delay: 100,
  origin: "left",
  distance: "150px",
  reset: false,
});

ScrollReveal().reveal(".title-shape", {
  delay: 100,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".information-content h6", {
  delay: 100,
  origin: "right",
  distance: "250px",
  reset: true,
});
ScrollReveal().reveal(".info-content", {
  delay: 100,
  origin: "bottom",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".section-two-img", {
  delay: 100,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".get-price-sub", {
  delay: 100,
  origin: "right",
  distance: "250px",
  reset: true,
});

ScrollReveal().reveal(".sub-title", {
  delay: 100,
  origin: "right",
  distance: "250px",
  reset: true,
});

ScrollReveal().reveal(".sub-p", {
  delay: 100,
  origin: "bottom",
  distance: "50px",
  reset: true,
});
ScrollReveal().reveal(".price-sp", {
  delay: 100,
  origin: "bottom",
  distance: "50px",
  reset: true,
});
ScrollReveal().reveal(".download-app-form-sub", {
  delay: 100,
  origin: "right",
  distance: "200px",
  reset: true,
});

ScrollReveal().reveal(".mobile-video", {
  delay: 100,
  origin: "bottom",
  distance: "200px",
  reset: true,
});

ScrollReveal().reveal(".use-card", {
  delay: 100,
  origin: "right",
  distance: "300px",
  reset: true,
});

ScrollReveal().reveal(".uses-img", {
  delay: 100,
  origin: "bottom",
  distance: "400px",
  reset: true,
});
ScrollReveal().reveal(".sections-row", {
  delay: 100,
  origin: "bottom",
  distance: "400px",
  reset: true,
});

ScrollReveal().reveal(".customers-card", {
  delay: 100,
  origin: "bottom",
  distance: "400px",
  reset: true,
});
ScrollReveal().reveal(".logo", {
  delay: 100,
  origin: "left",
  distance: "200px",
  reset: true,
});

ScrollReveal().reveal(".footer-links h5 ", {
  delay: 100,
  origin: "right",
  distance: "200px",
  reset: true,
});
ScrollReveal().reveal(".footer-links a ", {
  delay: 150,
  origin: "bottom",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".footer-contact h5 ", {
  delay: 100,
  origin: "right",
  distance: "200px",
  reset: true,
});
ScrollReveal().reveal(".footer-contact a ", {
  delay: 150,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".footer-contact p ", {
  delay: 150,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".footer-img img ", {
  delay: 150,
  origin: "top",
  distance: "350px",
  reset: true,
});
ScrollReveal().reveal(".footer-copyright p ", {
  delay: 100,
  origin: "bottom",
  distance: "50px",
  reset: true,
});
