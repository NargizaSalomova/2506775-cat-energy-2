var e=document.querySelector(".main-header__toggle"),a=document.querySelector(".main-nav");e.addEventListener("click",()=>{e.classList.contains("main-header__toggle--closed")?(e.classList.remove("main-header__toggle--closed"),e.classList.add("main-header__toggle--opened"),a.classList.remove("main-nav--closed")):(e.classList.remove("main-header__toggle--opened"),e.classList.add("main-header__toggle--closed"),a.classList.add("main-nav--closed"))});
