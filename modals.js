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
button[1].style.border =  "3px solid gray";
button[1].style.color = "grey";
let plaid = document.querySelector(".plaid")
let unplaid = document.querySelector(".unplaid")
    function change(){  
        unplaid.classList.remove("show");
        plaid.classList.remove("remove")
        button[0].style.border =  "3px solid #fff";
        button[1].style.border =  "3px solid gray";
        button[1].style.color = "grey";
        button[0].style.color = "#fff";
    }

    function change2(){  
        plaid.classList.add("remove")
        unplaid.classList.add("show");
        button[0].style.border =  "3px solid gray";
        button[1].style.border =  "3px solid #fff";
        button[0].style.color = "grey";
        button[1].style.color = "#fff";
    }
    button[0].addEventListener("click", change);
    button[1].addEventListener("click", change2)