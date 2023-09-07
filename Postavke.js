
window.onscroll = function() {myFunction()};
object.onclick = function() {FFunction()};
object.onclick = function() {FFunction1()};
object.onclick = function() {FFunction2()};
object.onclick = function() {FFunction3()};
object.onclick = function() {FFunction4()};
object.onclick = function() {FFunction5()};

var navbar = document.getElementById("navbar");


var sticky = navbar.offsetTop;

 

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } 
  
  else if(window.pageXOffset <= sticky) {
    
      navbar.classList.remove("sticky");
    
   
  }
}
// When the user clicks on <div>, open the popup
function FFunction() {
  var popup = document.getElementById("myPopup");
  
  popup.classList.toggle("show");
}

function FFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}
function FFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
function FFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}
function FFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}
function FFunction5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
}
