const questionsBtns = document.querySelectorAll(".question");
const questionContent = document.querySelectorAll(".question-content");
$(function () {
  setTimeout(() => {
    $(".loadingPage").css("opacity", "0");
    $(".loadingPage").css("z-index", "-1111");
    $("body").css("overflow", "auto");
    $("body").css("hight", "auto");
  }, 0);
  questionsBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.children[0].children[1].children[0].classList.contains(
        "fa-chevron-down"
      )
        ? btn.children[0].children[1].children[0].classList.replace(
            "fa-chevron-down",
            "fa-chevron-up"
          )
        : btn.children[0].children[1].children[0].classList.replace(
            "fa-chevron-up",
            "fa-chevron-down"
          );
      btn.children[1].classList.toggle("d-block");
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
  reset: false,
});

ScrollReveal().reveal(".title-shape", {
  delay: 150,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".question", {
  delay: 100,
  origin: "right",
  distance: "250px",
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
