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

document.addEventListener("DOMContentLoaded", () => {
    const iconBoxes = document.querySelectorAll(".icon-box");
    iconBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.transform = "translateY(0)";
            box.style.opacity = "1";
        }, index * 300);
    });
});

document.addEventListener("scroll", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const triggerPoint = window.innerHeight * 0.75;

    timelineItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerPoint) {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }
    });
});

// Função de animação de contagem
function contarNumero(id, valorFinal) {
    let contador = 0;
    const numeroElement = document.getElementById(id);
    const intervalo = setInterval(() => {
        if (contador < valorFinal) {
            contador++;
            numeroElement.textContent = contador;
        } else {
            clearInterval(intervalo);
        }
    }, 30); // A cada 30ms o número aumenta
}

// Iniciar animações quando a seção estiver visível
function iniciarContagem() {
    const conquistaSection = document.getElementById('conquistas');
    const conquistaPosition = conquistaSection.getBoundingClientRect();

    if (conquistaPosition.top <= window.innerHeight && conquistaPosition.bottom >= 0) {
        contarNumero('anos-de-mercado', 10); // Exemplo: 10 anos de mercado
        contarNumero('clientes-atendidos', 250); // Exemplo: 500 clientes atendidos
        contarNumero('projetos-concluidos', +390); // Exemplo: 200 projetos concluídos
        contarNumero('premios', 5); // Exemplo: 5 prêmios
    }
}

// Detectar quando a seção é visível
window.addEventListener('scroll', iniciarContagem);

// Função para adicionar animação de fade-in quando a seção estiver visível
function animarResponsabilidade() {
    const responsabilidadeSection = document.getElementById('responsabilidade-social');
    const responsabilidadePosition = responsabilidadeSection.getBoundingClientRect();

    if (responsabilidadePosition.top <= window.innerHeight && responsabilidadePosition.bottom >= 0) {
        responsabilidadeSection.classList.add('visivel');
    }
}

// Detecta quando a seção é visível para ativar a animação
window.addEventListener('scroll', animarResponsabilidade);


