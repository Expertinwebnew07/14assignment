 let buttons=document.querySelectorAll("#do-it");
   
// Flag variable to track whether the toast message has been shown
let toastShown = false;

// Add an event listener to detect when the cursor enters the webpage
document.addEventListener('mouseover', function() {
  // Check if the toast message has already been shown
  if (!toastShown) {
    // Display the toast message when the cursor enters the webpage for the first time
    Toastify({
      text: "\u{1F60F} Welcome! You can use it.",
      duration: 3000,
      newWindow: true,
      close:true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #fffff4)",
      },
      onClick: function() {} // Callback after click
    }).showToast();
    
    // Update the flag variable to indicate that the toast message has been shown
    toastShown = true;
  }
});

 
 //Dark blue box box
 function blanck(para){document.querySelector(".number").innerText=para; return para}
 //for input 
 function input(input){input=document.querySelector(".input").value;
//  input=Number(input);
 
 return input
}
///for output
function output(para){
if(!para){
  document.querySelector("#display").innerText="Please Insert a number which you find.";
  return para;
}else{
  document.querySelector("#display").innerText=para; 
  return para;
}
}
//Round of A Number function
function  round() {
  let roundof= input(input);
   
  roundof=Math.round(roundof)
  output(roundof);
  blanck(roundof);
}
//Ceil function for increases fraction of decimal value
function  ceil() 
   {
    let ceilof= input(input);
     ceilof=Math.ceil(ceilof);
     output(ceilof)
     blanck(ceilof)
   }
   //Ceil function for decreses fraction of decimal value
     function  floor()
     {
      let floorof= input(input);
      floorof=Math.floor(floorof);
       output(floorof)
       blanck(floorof)
     }
     //Random Number function
     function  random()
     {
      let  randof= input(input);
       randof=Math.random( randof);
       output( randof)
      //  blanck( randof)
     }
     //Dice function for 1-6 unknown digits
     function  Dice()
     {
      let   dice= input(input);
        dice=(Math.random(dice)*6)+1;
        dice=Math.floor(dice)
        output(dice)
        // blanck(dice)
     }
     //16digits passward function
     function passward(){
      let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!`@#$%^&=+_-/.,'*0123456789";
      console.log(alpha.length)
      let passwordLength = 16; // Length of the password
 
      let password = "You can pass your passward. \n"; // Initialize an empty string to store the password
      
      for (let i = 0; i < passwordLength; i++) {
          let randomIndex = Math.floor(Math.random() * alpha.length);
          password += alpha.charAt(randomIndex);
      }
      
      // console.log(password);
      output(password)
     blanck(password)
     }
      //Number to string function
     function strtoNum(){
      let str=input(input);
      str=Number(str);
      str=str.toFixed(3)+"\nThese are you 3 floating Digits.";
      console.log(str)
      output(str)
      blanck(str)
     }
     //floating choise digits function
     function  floatlen(){
      let str=input(input);
      str=Number(str);
      let len=prompt("Enter your floating length as after decimal => 34.4546-----")
      str=str.toFixed(len)+`\n These are you ${len} floating Digits.`;
      console.log(str)
      output(str)
      blanck(str)
     }
     //GST Function
     function  gst(){
       let amount=+input(input);
       if(!amount){
        Toastify({
          text: "\u{1F914} Please fillup the input box",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #fff4f4)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
       }else{
       let tex=+prompt("Please enter you Tex for GST.")
      
       let gSt=(tex*amount)/100;
       gSt=Math.ceil(gSt)+amount;
       document.querySelector(".number").innerText=`Please Submit ${gSt} due to ${amount}Rs amount.`
       output(gSt)}
      }

     //input and output Clear function
      function inputclear(){
        document.querySelector(".inputfield").value=""
      }
      function outputclear(){
        document.querySelector("#display").innerHTML=""
      }
   