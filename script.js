/**
 * Lógica de validação do formulário e simulação de envio
 * Requisito: JavaScript obrigatório sem frameworks [cite: 12, 57]
 */
const form = document.getElementById('formContato');

form.addEventListener('submit', function(event) {
    // Impede o envio padrão para processar a validação via JS [cite: 57]
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação: Verifica se todos os campos estão preenchidos [cite: 59]
    if (nome === "" || email === "" || mensagem === "") {
        alert("Erro: Todos os campos devem ser preenchidos.");
        return;
    }

    // Validação de formato de e-mail [cite: 60]
    if (!email.includes("@") || !email.includes(".")) {
        alert("Erro: Insira um endereço de e-mail válido.");
        return;
    }

    // Simulação do envio com sucesso e limpeza dos campos [cite: 61, 62]
    alert("Mensagem enviada com sucesso! (Simulação)");
    form.reset();
});