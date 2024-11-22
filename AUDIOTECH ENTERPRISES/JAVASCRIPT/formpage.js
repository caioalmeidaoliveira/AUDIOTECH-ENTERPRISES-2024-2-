document.getElementById('avaliacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    let recomendacao = `Obrigado ${nome} por preencher o formulário.`;

    if (idade >= 60) {
        recomendacao += " Com base em sua idade, recomendamos uma avaliação auditiva detalhada.";
    } else {
        recomendacao += " Recomendamos um check-up auditivo regular.";
    }

    alert(recomendacao);
});