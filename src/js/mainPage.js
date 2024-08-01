// استرجاع العناصر من DOM
const toggleInfo = document.querySelector("#info-btn");
const info = document.querySelector(".information-content");
const infoLayer = document.querySelector(".info-layer");
const information = document.querySelector("#information");

// الحصول على ارتفاع العنصر عند تحميل الصفحة
const mainHeight = info.offsetHeight;

// التعامل مع تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loadingPage = document.querySelector(".loadingPage");
    if (loadingPage) {
      loadingPage.style.opacity = "0";
      loadingPage.style.zIndex = "-1111";
    }
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }, 0);

  // التعامل مع زر التبديل
  toggleInfo.addEventListener("click", () => {
    if (info.offsetHeight <= 650) {
      info.style.cssText = "height: 100% !important; overflow: visible;";
      infoLayer.style.opacity = "0";
      const icon = toggleInfo.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-arrow-down");
        icon.classList.add("fa-arrow-up");
      }
    } else {
      info.style.cssText = `height: ${mainHeight}px !important; overflow: hidden;`;
      infoLayer.style.opacity = "1";
      const icon = toggleInfo.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-arrow-up");
        icon.classList.add("fa-arrow-down");
      }
      window.scrollTo(0, information.offsetTop);
    }
  });
});

// إعداد ScrollReveal
const scrollRevealOptions = {
  delay: 200,
  origin: "bottom",
  distance: "200px",
  reset: false
};

ScrollReveal().reveal(".logo", { delay: 100, origin: "left", distance: "200px", reset: true });
ScrollReveal().reveal(".nav-link", { delay: 180, origin: "top", distance: "150px", reset: true });
ScrollReveal().reveal(".nav", { delay: 250, origin: "right", distance: "350px", reset: true });
ScrollReveal().reveal(".home-content", { delay: 150, origin: "right", distance: "150px", reset: true });
ScrollReveal().reveal(".hero-img", { delay: 250, origin: "bottom", distance: "250px", reset: true });
ScrollReveal().reveal(".download-app", { delay: 200, origin: "left", distance: "350px", reset: true });
ScrollReveal().reveal(".title-shape", { ...scrollRevealOptions, delay: 200, origin: "right", distance: "150px", reset: false });
ScrollReveal().reveal(".information-content h6", { ...scrollRevealOptions, distance: "250px" });
ScrollReveal().reveal(".info-content", { ...scrollRevealOptions, distance: "150px" });
ScrollReveal().reveal(".section-two-img", { ...scrollRevealOptions, distance: "250px" });
ScrollReveal().reveal(".get-price-sub", { ...scrollRevealOptions, distance: "250px", reset: false });
ScrollReveal().reveal(".sub-title", { ...scrollRevealOptions, distance: "250px", reset: false });
ScrollReveal().reveal(".sub-p", { ...scrollRevealOptions, distance: "50px", reset: false });
ScrollReveal().reveal(".price-sp", { ...scrollRevealOptions, distance: "50px", reset: false });
ScrollReveal().reveal(".download-app-form-sub", { ...scrollRevealOptions, distance: "200px", reset: false });
ScrollReveal().reveal(".mobile-video", { ...scrollRevealOptions, distance: "200px", reset: false });
ScrollReveal().reveal(".use-card", { ...scrollRevealOptions, distance: "300px", reset: false });
ScrollReveal().reveal(".uses-img", { ...scrollRevealOptions, distance: "400px", reset: false });
ScrollReveal().reveal(".sections-row", { ...scrollRevealOptions, distance: "400px", reset: false });
ScrollReveal().reveal(".customers-card", { ...scrollRevealOptions, distance: "400px", reset: false });
ScrollReveal().reveal(".footer-links h5", { ...scrollRevealOptions, distance: "200px", reset: false });
ScrollReveal().reveal(".footer-links a", { ...scrollRevealOptions, delay: 250, distance: "150px" });
ScrollReveal().reveal(".footer-contact h5", { ...scrollRevealOptions, distance: "200px", reset: false });
ScrollReveal().reveal(".footer-contact a", { ...scrollRevealOptions, delay: 250, distance: "150px" });
ScrollReveal().reveal(".footer-contact p", { ...scrollRevealOptions, delay: 250, distance: "150px" });
ScrollReveal().reveal(".footer-img img", { ...scrollRevealOptions, delay: 250, origin: "top", distance: "350px" });
ScrollReveal().reveal(".footer-copyright p", { ...scrollRevealOptions, distance: "50px" });
