let body = document.querySelector("body");
let modal = document.querySelector(".modal");
let menu = document.querySelector(".navLast");
let close = document.querySelector(".close");
let section = document.querySelector(".bg")
 function hide(){
    if(modal.style.display === "block"){
        body.style.overflowY = "visible";
        modal.style.display = "none";
        // section.classlist.t(blurOnMenu)
    }else{
        modal.style.display = "block";
        // section.classlist.toggle("blurOnMenu")
        body.style.overflowY = "hidden";
    }
}

menu.addEventListener("click", hide)
// modal.addEventListener("click", hide)
close.addEventListener("click", hide);
console.log(body.scrollHeight)
// export {body} from "module";