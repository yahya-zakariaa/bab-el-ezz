const articals = document.querySelectorAll(".articale");
const articalBtns = document.querySelectorAll(".articaleInnerBtn button");
const articaleContainer = document.querySelectorAll(".articaleBtn");
articalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        articalBtns.forEach((articalBtn) => {
          articalBtn.classList.remove("articaleBtnActive");
        })
      let BtnTarget =  e.target.getAttribute("to");
      e.target.classList.add("articaleBtnActive");
       articals.forEach((artical) => {
           if (artical.getAttribute("id") == BtnTarget){
             artical.classList.remove("d-none");
             artical.classList.add("d-block");
           }else{
             artical.classList.remove("d-block");
             artical.classList.add("d-none");
           }
        })
        articaleContainer.forEach((articaleContainer) => {
            articaleContainer.classList.remove("articaleBtnActive")
            if (articaleContainer.classList.contains(`to-${BtnTarget}`)){
                articaleContainer.classList.add("articaleBtnActive")    
                
            }
        })
    });
})