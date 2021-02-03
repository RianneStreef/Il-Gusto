
function changeHeaderClass() {
  if (window.pageYOffset > 30) {
    header.classList.add('header-background')
  } else {
    header.classList.remove('header-background')
  }
}

window.onscroll = function () {
  changeHeaderClass();
};



var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
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



// function toggleNav() {
//   console.log('toggeling');
//   var nav =  document.getElementById("nav");

//   if (nav.class === "hidden-mobile") {
//     console.log('hide');

//  classList.remove("hidden-mobile");
//   document.getElementById("openNav").style.display="none";
//   }
//   else {
//   document.getElementById("nav").classList.add("hidden-mobile");
//   document.getElementById("openNav").style.display="inline-block";
//   }
// }

function openNav() {
  document.getElementById("nav").classList.remove("hidden-mobile");
  document.getElementById("openNav").style.display="none";
}

function closeNav() {
  document.getElementById("nav").classList.add("hidden-mobile");
  document.getElementById("openNav").style.display="inline-block";
}


function selectMenu(selector) {

let menuList = document.getElementsByClassName("menu-list");

for (item of menuList) {
  item.style.display = "flex";
  item.classList.remove("hidden");
  item.classList.add("visible"); 
 }

for (item of menuList) {


  if (selector == 'all' ) {
    for (item of menuList) {
      item.classList.remove("hidden");
      item.classList.add("visible");
      // item.style.display = "flex";  
      } 
    }    
  
  else if (item.className !== `menu-list ${selector} visible`) {
    item.classList.remove("visible");
    item.classList.add("hidden"); 
    // item.style.display = "none";
    }
  }
}  


