let slides = document.querySelectorAll('.slide');
let currentSlide = 2;

function changeSlide() {
 slides[currentSlide].style.opacity = 0;
 currentSlide = (currentSlide + 1) % slides.length;
 slides[currentSlide].style.opacity = 1;
}

setInterval(changeSlide, 5000);