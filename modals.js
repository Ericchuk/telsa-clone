// import body from "./script.js"
// console.log(body);
let body = document.querySelector("body");
let modal = document.querySelector(".modalNav");
let menu = document.querySelector(".menu");
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
modal.addEventListener("click", hide)
close.addEventListener("click", hide);

console.log(body.scrollHeight)
// export {body} from "module";

let button = document.querySelectorAll(".btnContainer button");
let main = document.querySelector(".plaid")
// for(let i = 0; i < button.length; i++){
    function change(){
        // console.log(main);
        // main[1].style.display = "flex";
        main.style.display = "none";
    }
    button[0].addEventListener("click", change)
// }