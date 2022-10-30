mybutton = document.getElementById("top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topbutton() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

var left = document.getElementById("left-arrow");
var rightarrow = document.getElementById("arrow");

left.addEventListener("click", function() {

    document.getElementById("card").style.display = "inline";
    document.getElementById("secondcard").style.display = "none";
  
});

rightarrow.addEventListener("click", function() {

    document.getElementById("card").style.display = "none";
    document.getElementById("secondcard").style.display = "inline";
  
});


var monthly = document.getElementById("monthly");
var yearly = document.getElementById("yearly");

yearly.addEventListener("click", function() {

  document.getElementById("month-price").innerHTML = "170€";
  document.getElementById("year-price").innerHTML = "1999€";

});

monthly.addEventListener("click", function() {
    
    document.getElementById("month-price").innerHTML = "70€";
    document.getElementById("year-price").innerHTML = "199€";

});