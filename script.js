let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
  
    
}





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


























































// let menubar = document.querySelector('#menubar');
// let mynav = document.querySelector('.navbar');



// menubar.onclick = () =>{
//     menubar.classList.toggle('fa-times')
//     mynav.classList.toggle('active')
// }

// document.querySelector('#loginbtn').onclick = () =>{
//     document.querySelector('.login-form').classList.toggle('active');
//   }
//   document.querySelector('#closeloginform').onclick = () =>{
//     document.querySelector('.login-form').classList.remove('active');
//   }