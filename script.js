/**
 * Lógica de validação do formulário e simulação de envio
 */
const form = document.getElementById('formContato');

form.addEventListener('submit', function(event) {
    // Impede o envio real para processar a validação
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação de campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    // Validação básica de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
    }

    // Sucesso no envio (Simulação)
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    form.reset();
});
