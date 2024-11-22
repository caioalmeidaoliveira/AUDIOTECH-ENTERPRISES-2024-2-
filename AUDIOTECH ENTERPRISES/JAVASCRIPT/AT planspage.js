
document.addEventListener('DOMContentLoaded', () => {
    const planInputs = document.querySelectorAll('input[name="plan"]');
    const planSummary = document.getElementById('planSummary');
    const summaryDetails = document.querySelector('.summary-card ul');
        const paymentForm = document.getElementById("payment-Form");
        const successMessage = document.getElementById("success-message")


    const planDetails = {
        basico: {
            name: 'Plano Básico',
            price: 'R$ 29,90/mês',
            benefits: [
                '10% de desconto em consultas',
                'Acesso prioritário ao agendamento',
                'Desconto de 5% em aparelhos auditivos e acessórios',
                'Acesso a conteúdos exclusivos',
                'Suporte online básico (via Whatsapp)'
            ]
        },
        intermediario: {
            name: 'Plano Intermediário',
            price: 'R$ 59,90/mês',
            benefits: [
                '20% de desconto em consultas',
                'Teleconsultas gratuitas com especialistas auditivos (2x ao mês)',
                'Acesso prioritário ao agendamento com maiores opções de horários',
                'Desconto de 10% em aparelhos auditivos e acessórios',
                'Acesso a conteúdos exclusivos, incluindo webinars com especialistas',
                'Suporte online mais rápido (via Whatsapp)'
            ]
        },
        premium: {
            name: 'Plano Premium',
            price: 'R$ 99,90/mês',
            benefits: [
                '35% de desconto em consultas',
                'Teleconsultas gratuitas e ilimitadas com especialistas auditivos',
                'Prioridade máxima ao agendamento, incluindo horários fora do expediente',
                'Desconto de 20% em aparelhos auditivos e acessórios',
                'Acesso a todos os conteúdos exclusivos e eventos ao vivo com especialistas.',
                'Suporte VIP 24h por WhatsApp, com acompanhamento personalizado.'
            ]
        },
        familia: {
            name: 'Plano Família',
            price: 'R$ 149,90/mês (Até 5 membros)',
            benefits: [
                '*Será cobrado o valor de R$ 35,00 por membro adicional*',
                'Todos os benefícios do plano Premium para todos os incluídos',
                'Desconto adicional de 10% para consultas dos membros da família',
                'Acesso a pacotes familiares para aparelhos auditivos com condições especiais.',
                'Suporte prioritário para todas as consultas e compras da família.'
            ]
        },
        corporativo: {
            name: 'Plano Corporativo',
            price: 'PERSONALIZADO, a partir de R$ 299,90/mês (para empresas)',
            benefits: [
                'Todos os benefícios do Plano Premium para funcionários cadastrados.',
                'Programas de saúde auditiva personalizados para a empresa.',
                'Oferecimento de palestras e reuniões com especialistas de cuidados auditivos no ambiente corporativo',
                'Consultas em grupo e exames auditivos para colaboradores.',
                'Suporte corporativo com atendimento especializado.'
            ]
        },
    };

    function updatePlanSummary() {
        const selectedPlan = document.querySelector('input[name="plan"]:checked').value;
        const details = planDetails[selectedPlan];

        planSummary.textContent = `${details.name} - ${details.price}`;
        summaryDetails.innerHTML = details.benefits.map(benefit => `<li>${benefit}</li>`).join('');
    }

    planInputs.forEach(input => {
        input.addEventListener('change', updatePlanSummary);
    });

    updatePlanSummary();

    paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Mostra a mensagem de sucesso
    successMessage.style.display = "block";

    // Limpa os campos do formulário
    paymentForm.reset();
  });
});