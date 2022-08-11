let string = "abcdefghijklmopqrstuvwxyz.";
let matches = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// let alphabet = ["a",]
// for(let i = 0; i < matches.length; i++){
//     console.log(matches[i])
//     function isPangram(string){
//     if(string.includes(matches[i])){
//       console.log("true")
//     }else{
//       console.log("false");
//     }
// }

// }

// if(string.includes("a") & string.includes("b") & string.includes("c") & string.includes("d") & string.includes("e") & string.includes("f") & string.includes("g") & string.includes("h") & string.includes("i") & string.includes("j") & string.includes("k") & string.includes("l") & string.includes("m")& string.includes("n") & string.includes("o")& string.includes("p") & string.includes("q")& string.includes("r") & string.includes("s")& string.includes("t") & string.includes("u")& string.includes("v") & string.includes("w")& string.includes("x") & string.includes("y")& string.includes("z") || string.includes("A") & string.includes("B") & string.includes("C") & string.includes("D") & string.includes("E") & string.includes("F") & string.includes("G") & string.includes("H") & string.includes("I") & string.includes("J") & string.includes("K") & string.includes("L") & string.includes("M")& string.includes("N") & string.includes("O")& string.includes("P") & string.includes("Q")& string.includes("R") & string.includes("S")& string.includes("T") & string.includes("U")& string.includes("V") & string.includes("W")& string.includes("X") & string.includes("Y")& string.includes("Z")){
//     return true;
//   }else{
//     return false;
//   }
// isPangram(string)

for(let i = 0; i < matches.length; i++){
    //     console.log(matches[i])
        function isPangram(string){
        if(string.includes("a") & string.includes("b") & string.includes("c") & string.includes("d") & string.includes("e") & string.includes("f") & string.includes("g") & string.includes("h") & string.includes("i") & string.includes("j") & string.includes("k") & string.includes("l") & string.includes("m")& string.includes("n") & string.includes("o")& string.includes("p") & string.includes("q")& string.includes("r") & string.includes("s")& string.includes("t") & string.includes("u")& string.includes("v") & string.includes("w")& string.includes("x") & string.includes("y")& string.includes("z") || string.includes("A") & string.includes("B") & string.includes("C") & string.includes("D") & string.includes("E") & string.includes("F") & string.includes("G") & string.includes("H") & string.includes("I") & string.includes("J") & string.includes("K") & string.includes("L") & string.includes("M")& string.includes("N") & string.includes("O")& string.includes("P") & string.includes("Q")& string.includes("R") & string.includes("S")& string.includes("T") & string.includes("U")& string.includes("V") & string.includes("W")& string.includes("X") & string.includes("Y")& string.includes("Z")
        || string.includes(matches[i])){
          console.log("true")
        }else{
          console.log("false")
        }
        
    }
    isPangram(string)
    }