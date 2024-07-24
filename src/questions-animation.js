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
