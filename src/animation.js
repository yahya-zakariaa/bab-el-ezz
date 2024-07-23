const toggleInfo = document.querySelector("#info-btn");
const info = document.querySelector(".information-content");
const infoLayer = document.querySelector(".info-layer");    
const mainHeight = $(info).height();

$(function () {
    $(".loadingPage").css("opacity", "0");
    $(".loadingPage").css("z-index", "-1111");
    
    
})
toggleInfo.addEventListener("click", () => {
  if ($(info).height() <= 650) {
    info.style.cssText = "height: 100% !important; overflow: visible; ";
    infoLayer.style.cssText = "opacity: 0;";
    $(toggleInfo).find("i").removeClass("fa-arrow-down").addClass("fa-arrow-up");
} else {
    info.style.cssText = `height: ${mainHeight}px !important; overflow: hidden; `;
    infoLayer.style.cssText = "opacity: 1;";
    $(toggleInfo).find("i").removeClass("fa-arrow-up").addClass("fa-arrow-down");
  }
});
