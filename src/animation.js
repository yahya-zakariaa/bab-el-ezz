const toggleInfo = document.querySelector("#info-btn");
const info = document.querySelector(".information-content");
const infoLayer = document.querySelector(".info-layer");    
const mainHeight = $(info).height();
toggleInfo.addEventListener("click", () => {
  if ($(info).height() <= 650) {
    info.style.cssText = "height: 100% !important; overflow: visible; ";
    infoLayer.style.cssText = "opacity: 0;";
  } else {
    info.style.cssText = `height: ${mainHeight}px !important; overflow: hidden; `;
    infoLayer.style.cssText = "opacity: 1;";
  }
});
