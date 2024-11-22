document.addEventListener("DOMContentLoaded", () => {
    const paymentOptions = document.querySelectorAll(".option");
    const cardInfo = document.getElementById("card-info");
    const pixInfo = document.getElementById("pix-info");
    const qrcodeContainer = document.getElementById("qrcode");

    paymentOptions.forEach(option => {
        option.addEventListener("click", () => {
            const paymentType = option.getAttribute("data-payment");

            // Remove a classe "active" de todas as opções
            paymentOptions.forEach(opt => opt.classList.remove("active"));

            // Adiciona a classe "active" na opção selecionada
            option.classList.add("active");

            if (paymentType === "pix") {
                // Exibe apenas as informações do PIX
                cardInfo.classList.add("hidden");
                pixInfo.classList.remove("hidden");

                // Gera o QR Code se ainda não estiver gerado
                if (!qrcodeContainer.hasChildNodes()) {
                    const qrcode = new QRCode(qrcodeContainer, {
                        text: "00020126580014BR.GOV.BCB.PIX0114pix@audiotech.com5204000053039865404100.005802BR5913AudioTech LTDA6009SAO PAULO62290525",
                        width: 128,
                        height: 128,
                    });
                }
            } else {
                // Exibe o formulário de cartão e oculta as informações do PIX
                cardInfo.classList.remove("hidden");
                pixInfo.classList.add("hidden");
            }
        });
    });
});

document.getElementById('card-info').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pagamento realizado com sucesso!');

});
