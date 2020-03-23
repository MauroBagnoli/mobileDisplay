//Get the button
var mybutton = document.getElementById("cartel");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    mybutton.style.display = "none";
  }
}
