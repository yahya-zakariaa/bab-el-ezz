const questionsBtns = document.querySelectorAll(".question");
const questionContent = document.querySelectorAll(".question-content");

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
  reset: false,
});

ScrollReveal().reveal(".title-shape", {
  delay: 150,
  origin: "right",
  distance: "150px",
  reset: true,
});
ScrollReveal().reveal(".question", {
  delay: 500,
  origin: "right",
  distance: "250px",
  reset: true,
});