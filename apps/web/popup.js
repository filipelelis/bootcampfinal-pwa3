// apps/web/popup.js
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnCumprimentar');
    const saida = document.getElementById('saida');
    const nomeInput = document.getElementById('nome');
    saida.setAttribute('data-testid', 'saida-api'); // Para testes E2E

    botao.addEventListener('click', async () => { 
        const nome = nomeInput.value.trim();
        if (!nome) {
            saida.textContent = "Por favor, digite seu nome.";
            return;
        }

        try {
            // ESTA É A URL CORRETA E COMPLETA DA SUA API
            const response = await fetch('http://localhost:3000/api/saudacao');
            
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const data = await response.json();
            const saudacao = data.saudacao; 

            // Monta a string final com a resposta da API
            saida.textContent = `${saudacao}, ${nome}! Seja bem-vindo ao PWA.`;

        } catch (error) {
            console.error('Erro ao buscar saudação da API:', error);
            saida.textContent = "Erro ao conectar com a API.";
        }
    });
});