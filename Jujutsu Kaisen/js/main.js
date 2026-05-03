
let slideIndex = 0;

function showSlide(index) {
const containerFotos = document.querySelector(".carrosel-fotos");
const slides = document.querySelectorAll(".carrosel-fotos img");

if (slides.length === 0) return;

if (index >= slides.length){
  slideIndex = 0;
} else if (index < 0){
  slideIndex = slides.length - 1;
} else{
  slideIndex = index;
}

const deslocamento = -slideIndex * 100;
containerFotos.style.transform = `translateX(${deslocamento}%)`;
}

function moveSlide(direction){
  showSlide(slideIndex + direction);
}

document.addEventListener("DOMContentLoaded", () => {
showSlide(slideIndex);
});






