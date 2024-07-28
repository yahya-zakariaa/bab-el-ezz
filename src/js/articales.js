const articals = document.querySelectorAll(".articale");
const articalBtns = document.querySelectorAll(".articaleInnerBtn button");
const articaleContainer = document.querySelectorAll(".articaleBtn");
const homeSection = document.querySelector("#home");
$(function () {
  setTimeout(() => {
    $(".loadingPage").css("opacity", "0");
    $(".loadingPage").css("z-index", "-1111");
    $("body").css("overflow", "auto");
    $("body").css("hight", "auto");
  }, 0);

  articalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      window.scrollTo(0, homeSection.offsetTop + homeSection.clientHeight);
      articalBtns.forEach((articalBtn) => {
        articalBtn.classList.remove("articaleBtnActive");
      });
      let BtnTarget = e.target.getAttribute("to");
      e.target.classList.add("articaleBtnActive");
      articals.forEach((artical) => {
        if (artical.getAttribute("id") == BtnTarget) {
          artical.classList.remove("d-none");
          artical.classList.add("d-block");
        } else {
          artical.classList.remove("d-block");
          artical.classList.add("d-none");
        }
      });
      articaleContainer.forEach((articaleContainer) => {
        articaleContainer.classList.remove("articaleBtnActive");
        if (articaleContainer.classList.contains(`to-${BtnTarget}`)) {
          articaleContainer.classList.add("articaleBtnActive");
        }
      });
    });
  });
});

ScrollReveal().reveal(".nav-link", {
  delay: 100,
  origin: "top",
  distance: "150px",
  reset: true,
});

ScrollReveal().reveal(".nav", {
  delay: 100,
  origin: "right",
  distance: "150px",
  reset: true,
});

ScrollReveal().reveal(".home-content", {
  delay: 100,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".hero-img", {
  delay: 100,
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

ScrollReveal().reveal(".articaleBtn ", {
  delay: 150,
  origin: "left",
  distance: "200px",
  reset: true,
});
ScrollReveal().reveal(".articale-img ", {
  delay: 100,
  origin: "bottom",
  distance: "200px",
  reset: false,
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
