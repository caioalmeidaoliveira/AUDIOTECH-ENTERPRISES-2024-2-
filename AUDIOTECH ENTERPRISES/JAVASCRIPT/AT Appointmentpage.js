function togglePlanOptions() {
    const healthPlan = document.getElementById("health-plan").value;
    document.getElementById("audiotech-plans").classList.toggle("hidden", healthPlan !== "audiotech");
    document.getElementById("health-plans").classList.toggle("hidden", healthPlan !== "health");
}

function animatePlan(plan) {
    plan.style.transform = "scale(1.1)";
    plan.style.transition = "transform 0.3s";
}

function resetAnimation(plan) {
    plan.style.transform = "scale(1)";
}

// Gerar horários disponíveis dinamicamente
function showClinicInfo() {
    const timesContainer = document.getElementById("times-container");
    const availableTimes = document.getElementById("available-times");
    const clinicInfo = document.getElementById("clinic-info");
    
    timesContainer.innerHTML = ""; // Limpa os horários anteriores
    availableTimes.classList.remove("hidden");
    clinicInfo.classList.remove("hidden");

    // Adiciona horários fictícios
    const times = ["09:00", "10:30", "13:00", "15:00", "16:30", "18:30"];
    times.forEach((time) => {
        const timeSlot = document.createElement("div");
        timeSlot.className = "time-slot";
        timeSlot.innerHTML = `<i class="fas fa-clock"></i> ${time}`;
        timeSlot.onclick = () => selectTime(timeSlot);
        timesContainer.appendChild(timeSlot);
    });

    // Adiciona mapa e informações fictícias
    const clinicMap = document.getElementById("clinic-map");
    const clinicDetails = document.getElementById("clinic-details");
    clinicMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2479207597175!2d-46.53116772834686!3d-23.66709041844726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4346a935530f%3A0x1606e63fe5f55c95!2sAC%20Aparelhos%20Auditivos%20Santo%20Andr%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1727802546771!5m2!1spt-BR!2sbr"; // Exemplo
    clinicDetails.innerHTML = `
        <p>AC Aparelhos Auditivos – Santo André:<br/><img src="Assets AudioTech/pin_icon2.png"> Endereço: Rua Joaquim Távora, 124 – Vila Santa Teresa, Santo André – SP, CEP: 09030-390<br/><img src="Assets AudioTech/telephone_icon.png"> Telefone: (+55) 11 4436-7059<br/><img src="Assets AudioTech/whatsapp_icon.png"> Whatsapp: (+55) 11 99482-8981<br/><img src="Assets AudioTech/instagram_icon.png"> Instagram: @ac.aparelhosauditivos</p>
    `;
}

// Função para selecionar o horário
function selectTime(selectedSlot) {
    // Remove a classe "selected" de todos os horários
    const allSlots = document.querySelectorAll(".time-slot");
    allSlots.forEach(slot => slot.classList.remove("selected"));

    // Adiciona a classe "selected" ao horário clicado
    selectedSlot.classList.add("selected");

    // Armazena o horário selecionado
    const selectedTime = selectedSlot.textContent.trim();
    console.log("Horário selecionado:", selectedTime);
}


function handleInsurance() {
    const insurance = document.getElementById('insurance').value;
    const details = document.getElementById('insurance-details');

    if (insurance === "audiotech") {
        details.innerHTML = `
            <label for="plan">Selecione seu plano:</label>
            <select id="plan">
                <option value="basic">Básico</option>
                <option value="mid">Intermediário</option>
                <option value="premium">Premium</option>
                <option value="family">Família</option>
                <option value="corporate">Corporativo</option>
            </select>
            <br/><br/>
            <a href="AT Homepage.html"><button type="submit">Marcar Consulta</button></a>
        `;
    } else if (insurance === "other") {
        details.innerHTML = `
            <label for="other-plan">Selecione o plano:</label>
            <select id="other-plan">
                <option value="unimed">Unimed</option>
                <option value="amil">Amil</option>
                <option value="sulamerica">Sulamérica</option>
                <option value="notredame">NotreDame Intermédica</option>
                <option value="alice">Alice</option>
            </select>
            <br/><br/>
            <a href="AT Homepage.html"><button type="submit">Marcar Consulta</button></a>
        `;
    } else {
        details.innerHTML = `<h2>Formulário de Pagamento</h2>
            <div class="form-group">
                <label for="card-name">Nome no Cartão</label>
                <input type="text" id="card-name" placeholder="Nome no cartão" required>
            </div>
            <div class="form-group">
                <label for="card-name">Banco</label>
                <input type="text" id="card-name" placeholder="Banco" required>
            </div>
            <div class="form-group">
                <label for="card-number">Número do Cartão</label>
                <input type="text" id="card-number" placeholder="Número do cartão" required>
            </div>
            <div class="form-group">
                <label for="expiry-date">Data de Expiração</label>
                <input type="month" id="expiry-date" required>
            </div>
            <div class="form-group">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="CVV" required>
            </div>
            <a href="AT Homepage.html"><button type="submit">Finalizar Pagamento</button></a>`
    }
}

// Exibir formulário de pagamento se o usuário não tiver plano
if (insurance === "none") {
    document.getElementById("payment-form").classList.remove("hidden");
} else {
    document.getElementById("payment-form").classList.add("hidden");
}


