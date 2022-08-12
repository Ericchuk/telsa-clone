let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".closeHamburger");
let plus = document.querySelectorAll(".plus");
let button = document.querySelectorAll(".modelContent .sized");
let menuContent = document.querySelector(".navContent");
let compareClose = document.querySelector("#compare .closeIcon")
console.log(hamburger,close,plus,button,compareClose,menuContent);

function openMenu(){
    if(menuContent.style.display === "flex"){
      menuContent.style.display = "none";
    }else{
      menuContent.style.display = "flex"
    }
}

hamburger.addEventListener("click", openMenu);
menuContent.addEventListener("click", openMenu);

for(let i = 0; i < plus.length; i++){
  function openLearnMore(){
    this.parentElement.parentNode.parentElement.childNodes[3].style.display = "flex";
      console.log(this.parentElement.parentNode.parentElement.childNodes[3])
    
  }
  plus[i].addEventListener("click", openLearnMore)
}

// for(let i = 0; i < )