


// // -----------------------------------my js---------------------------------


// var firstButton = document.querySelector(".arrow2");
// var secondButton = document.querySelector(".arrow1");
// var c1 = document.querySelector(".child1");
// var c2 = document.querySelector(".child2");
// var c3 = document.querySelector(".child3");
// var c4 = document.querySelector(".child4");
// var c5 = document.querySelector(".child5");
// var c6 = document.querySelector(".child6");




// // ---------primary degree-----------
// var prim1=0;
// var prim2=30;
// var prim3=60;
// var prim4=-30;
// var prim5=-60;
// var prim6=-90;

// c1.style.transform= `rotate(${prim1}deg)`;
// c2.style.transform= `rotate(${prim2}deg)`;
// c3.style.transform= `rotate(${prim3}deg)`;
// c4.style.transform= `rotate(${prim4}deg)`;
// c5.style.transform= `rotate(${prim5}deg)`;
// c6.style.transform= `rotate(${prim6}deg)`;



// // ---------destination degress----------
// var deg=30;
// var loc1=30;
// var loc2=60;
// var loc3=90;
// var loc4=-0;
// var loc5=-30;
// var loc6=-60;
// var shopButton = document.querySelector(".shop");
// var mainDeg=30;

// firstButton.addEventListener("click",function(){

//     c1.style.transform= `rotate(${loc1}deg)`;
//     c2.style.transform= `rotate(${loc2}deg)`;
//     c3.style.transform= `rotate(${loc3}deg)`;
//     c4.style.transform= `rotate(${loc4}deg)`;
//     c5.style.transform= `rotate(${loc5}deg)`;
//     c6.style.transform= `rotate(${loc6}deg)`;
//     for(var i =0;i<6;i++)
//     {
//         var circleRotate = document.querySelectorAll(".cir")[i];
//         circleRotate.style.transform = `rotate(${mainDeg}deg)`;
//     }
    
//     var backg2= document.querySelector(".main-circle");
//     backg2.style.backgroundColor="#f88888";
    
//     firstButton.style.backgroundColor="#f88888";
//     secondButton.style.backgroundColor="#f88888";
//     document.querySelector(".shop").style.backgroundColor="#f88888";
//     document.querySelector(".dest").style.color ="#f88888";
//     // document.querySelector(".shop").style.boxShadow ="0px 15px 20px #f88888";


//     // ---------------javaScript for hover on orange button---------------


//   shopButton.addEventListener('mouseleave', function(){
//     shopButton.style.boxShadow = '0px 15px 20px  #fff';
    
//   });

//   shopButton.addEventListener('mouseenter', function(){
//     shopButton.style.boxShadow ="0px 15px 20px #f88888";
    
   
//   });


// // -----------------------javaScript for hover on orange button------------------------


// })





// // --------go back to primary-------------

// var origin =0;
// secondButton.addEventListener("click",function(){

//     c1.style.transform= `rotate(${prim1}deg)`;
//     c2.style.transform= `rotate(${prim2}deg)`;
//     c3.style.transform= `rotate(${prim3}deg)`;
//     c4.style.transform= `rotate(${prim4}deg)`;
//     c5.style.transform= `rotate(${prim5}deg)`;
//     c6.style.transform= `rotate(${prim6}deg)`;
//     var backg1= document.querySelector(".main-circle");
//     backg1.style.backgroundColor="#ddd2fc";
   

//     for(var i =0;i<6;i++)
//     {
//         var circleRotate = document.querySelectorAll(".cir")[i];
//         circleRotate.style.transform = `rotate(${0}deg)`;
//     }

//     firstButton.style.backgroundColor="#ddd2fc";
//     secondButton.style.backgroundColor="#ddd2fc";
//     document.querySelector(".shop").style.backgroundColor="#ddd2fc";
//     document.querySelector(".dest").style.color ="#b69dfa";
  




//     // -----------javaScript code for purple shadow-------------
//     var shopButton = document.querySelector(".shop");
//     shopButton.addEventListener('mouseleave', function(){
//         shopButton.style.boxShadow = '0px 15px 20px #fff';
        
//       });

//     shopButton.addEventListener('mouseenter', function(){
//         shopButton.style.boxShadow ="0px 15px 20px #7d53f0";
//       });

//       // -----------javaScript code for purple shadow-------------



      
// })


 // Get the modal
 var modal = document.getElementById("myModal1");
 var modal2=document.getElementById("myModal2");
 // Get the button that opens the modal
 var btn = document.getElementById("myBtn1");
 var btn2=document.getElementsByClassName("myBtn2")[0];

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close1")[0];

 // When the user clicks the button, open the modal 

  btn.onclick = function () {
    modal.style.display = "block";
  }
 
 

 if($(window).width() <=768)
 {
  btn2.onclick = function () {
    modal2.style.display = "block";
  }
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
   modal.style.display = "none";
 }

 

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
   else if(event.target==modal2)
   modal2.style.display="none";
 }

 