//Menu Responsivo
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

// Função para atualizar os indicadores
function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === slideIndex);
  });
}

// Função para mostrar um slide específico
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  updateIndicators();
}

// Função para avançar para o próximo slide
function nextSlide() {
  showSlide(slideIndex + 1);
}

// Função para voltar para o slide anterior
function prevSlide() {
  showSlide(slideIndex - 1);
}

// Controle das setas
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Controle dos indicadores (clique para navegar)
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
  });
});

// Troca automática de slides a cada 3 segundos
setInterval(nextSlide, 3000);

let slideIndexAvaliacao = 0;
const slidesAvaliacao = document.querySelectorAll('.slide-avaliacao');
const indicatorsAvaliacao = document.querySelectorAll('.indicator-avaliacao');

// Função para atualizar os indicadores das avaliações
function updateIndicatorsAvaliacao() {
  indicatorsAvaliacao.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === slideIndexAvaliacao);
  });
}

// Função para mostrar um slide específico das avaliações
function showSlideAvaliacao(index) {
  if (index >= slidesAvaliacao.length) {
    slideIndexAvaliacao = 0;
  } else if (index < 0) {
    slideIndexAvaliacao = slidesAvaliacao.length - 1;
  } else {
    slideIndexAvaliacao = index;
  }
  const slideWidthAvaliacao = slidesAvaliacao[0].clientWidth;
  document.querySelector('.slides-avaliacoes').style.transform = `translateX(${-slideIndexAvaliacao * slideWidthAvaliacao}px)`;
  updateIndicatorsAvaliacao();
}

// Função para avançar para o próximo slide de avaliação
function nextSlideAvaliacao() {
  showSlideAvaliacao(slideIndexAvaliacao + 1);
}

// Função para voltar para o slide de avaliação anterior
function prevSlideAvaliacao() {
  showSlideAvaliacao(slideIndexAvaliacao - 1);
}

// Controle das setas para o slider de avaliações
document.querySelector('.next-avaliacao').addEventListener('click', nextSlideAvaliacao);
document.querySelector('.prev-avaliacao').addEventListener('click', prevSlideAvaliacao);

// Controle dos indicadores de avaliações
indicatorsAvaliacao.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlideAvaliacao(index);
  });
});

// Troca automática de slides a cada 3 segundos
setInterval(nextSlideAvaliacao, 3000);

// Animação de rolagem para a seção de contato
window.addEventListener('scroll', function() {
  const contactSection = document.querySelector('.contact-section');
  const contactPosition = contactSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (contactPosition < screenPosition) {
      contactSection.classList.add('visible');
  }
});


