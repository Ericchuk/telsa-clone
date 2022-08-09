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
close.addEventListener("click", hide);

// function disappear(){ 
//     let contentPosition = section.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight;
//     if(contentPosition < screenPosition){
//         alert("hey man")
//     }
// }

//     let content = document.querySelector(".bg");
 
//     let h1 = document.querySelector("h1");
//     let contentPosition = content.getBoundingClientRect();
//     let screenPosition = window.innerHeight;
// // window.addEventListener('click', ()=>{

// //     if(contentPosition < screenPosition){
// //         // alert("Hey man");
// //         h1.classList.add("active");
// //     }else{
// //         alert("cddcd")
// //     }
// // });
// // console.log(contentPosition,screenPosition) 
// // window.onscroll = function() {myFunction()};

// // function myFunction() {
// //   if (contentPosition > screenPosition) {
// //     alert("aaa")
// //   } else {
// //     alert("bbb")
// //   }
// // }

// let sections = document.querySelectorAll(".bg");

// for(let i = 0; i < sections.length; i++){
//     function each(){
//         console.log("aaa")
//     }
//     sections[i].addEventListener("scroll", each)
// }
// // modal.addEventListener("click", hide)
// close.addEventListener("click", hide);
// console.log(body.scrollHeight)
