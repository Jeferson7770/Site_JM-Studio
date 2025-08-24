document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const messageElement = document.getElementById("form-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Exibe a mensagem de sucesso
        messageElement.innerText = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
        messageElement.style.display = "block";

        // Limpa os campos do formulário
        form.reset();

        // Esconde a mensagem após 5 segundos
        setTimeout(() => {
            messageElement.style.display = "none";
        }, 5000);
    });
});


