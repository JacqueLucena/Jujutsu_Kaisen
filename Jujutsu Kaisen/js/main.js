// main.js

// Seleciona todas as imagens do carrossel e define o índice inicial
let slideIndex = 0;
const slides = document.querySelectorAll(".carrossel .container img");

// Função para mostrar o slide com base no índice
function showSlide(index) {
  // Ajusta o índice para ficar dentro do intervalo das imagens
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  // Oculta todas as imagens
  slides.forEach((slide) => (slide.style.display = "none"));

  // Mostra a imagem atual
  slides[slideIndex].style.display = "block";
}

// Função para mudar de slide ao clicar nos botões
function moveSlide(direction) {
  showSlide(slideIndex + direction);
}

// Mostra o primeiro slide ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
});
