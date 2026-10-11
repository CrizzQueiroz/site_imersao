
/* =====================================
   CONFIGURAÇÕES DA LANDING PAGE
===================================== */

// IMPORTANTE:
// Troque pelo número de WhatsApp da organização.
// Use código do Brasil + DDD + número, somente números.
// Exemplo fictício: 5511999999999

const telefoneWhatsApp = "5564992451799";

// Atualiza o ano automaticamente no rodapé
const elementoAno = document.getElementById("ano");

if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}

// Configura os botões de WhatsApp
const botoesWhatsApp = document.querySelectorAll("[data-whatsapp]");

botoesWhatsApp.forEach(function (botao) {

    botao.addEventListener("click", function (evento) {

        evento.preventDefault();

        // Verifica se o telefone ainda é um exemplo
        if (!/^\d{12,13}$/.test(telefoneWhatsApp)) {
            alert(
                "Configure o número de WhatsApp no arquivo script.js antes de usar este botão."
            );
            return;
        }

        const mensagem = botao.dataset.mensagem ||
            "Olá! Gostaria de receber informações sobre os cursos.";

        const mensagemCodificada = encodeURIComponent(mensagem);

        const linkWhatsApp =
            `https://wa.me/${telefoneWhatsApp}?text=${mensagemCodificada}`;

        window.open(linkWhatsApp, "_blank", "noopener,noreferrer");

    });

});
