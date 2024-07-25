const toggleInfo = document.querySelector("#info-btn");
const info = document.querySelector(".information-content");
const infoLayer = document.querySelector(".info-layer");
const mainHeight = $(info).height();
const scrollRevealConfig = {
  reset: true,
  delay: 200,
  duration: 2000,
  distance: "100px",
};
$(function () {
  setTimeout(() => {
    $(".loadingPage").css("opacity", "0");
    $(".loadingPage").css("z-index", "-1111");
  }, 1000);
});
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

ScrollReveal().reveal(".nav-link", {
  delay: 300,
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
  delay: 150,
  origin: "left",
  distance: "150px",
  reset: true,
});

ScrollReveal().reveal(".title-shape", {
  delay: 150,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".information-content h6", {
  delay: 250,
  origin: "right",
  distance: "250px",
  reset: true,
});
ScrollReveal().reveal(".info-content", {
  delay: 600,
  origin: "bottom",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".section-two-img", {
  delay: 200,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".get-price-sub", {
  delay: 200,
  origin: "right",
  distance: "250px",
  reset: true,
});

ScrollReveal().reveal(".sub-title", {
  delay: 200,
  origin: "right",
  distance: "250px",
  reset: true,
});

ScrollReveal().reveal(".sub-p", {
  delay: 600,
  origin: "bottom",
  distance: "50px",
  reset: true,
});
ScrollReveal().reveal(".price-sp", {
  delay: 600,
  origin: "bottom",
  distance: "50px",
  reset: true,
});
ScrollReveal().reveal(".download-app-form-sub", {
  delay: 500,
  origin: "right",
  distance: "200px",
  reset: true,
});

ScrollReveal().reveal(".mobile-video", {
  delay: 400,
  origin: "bottom",
  distance: "200px",
  reset: true,
});

ScrollReveal().reveal(".use-card", {
  delay: 500,
  origin: "right",
  distance: "300px",
  reset: true,
});


ScrollReveal().reveal(".uses-img", {
  delay: 300,
  origin: "bottom",
  distance: "400px",
  reset: true,
});
ScrollReveal().reveal(".sections-row", {
  delay: 300,
  origin: "bottom",
  distance: "400px",
  reset: true,
});

ScrollReveal().reveal(".customers-card", {
  delay: 300,
  origin: "bottom",
  distance: "400px",
  reset: true,
});
ScrollReveal().reveal(".logo", {
  delay: 300,
  origin: "left",
  distance: "200px",
  reset: true,
});

