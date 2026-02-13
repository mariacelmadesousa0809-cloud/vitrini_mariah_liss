/* ===== MODAL DE CONTATO ===== */

/**
 * Alterna a visibilidade do modal de contato
 */
function toggleContact() {
    const modal = document.getElementById('contactModal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}

/**
 * Fecha o modal ao clicar fora dele
 */
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

/**
 * Configuração Completa do Formulário
 * - Define o ID do Formspree
 * - Cria o redirecionamento para a página de obrigado
 * - Gerencia o estado do botão
 */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    // Define o destino (usando seu ID novo)
    contactForm.action = "https://formspree.io/f/mgolwvgp";
    contactForm.method = "POST";

    // Cria o campo _next via JS para garantir o redirecionamento
    let nextField = contactForm.querySelector('input[name="_next"]');
    if (!nextField) {
        nextField = document.createElement('input');
        nextField.type = 'hidden';
        nextField.name = '_next';
        contactForm.appendChild(nextField);
    }
    nextField.value = "https://vitrini-mariah-liss.netlify.app/obrigado.html";

    contactForm.addEventListener('submit', function(e) {
        // Deixamos o evento seguir para o Formspree
        const btn = this.querySelector('.btn-send-now');
        if (btn) {
            btn.innerText = 'ENVIANDO...';
            btn.style.opacity = '0.7';
            btn.disabled = true;
        }
    });
}

/* ===== ANIMAÇÕES E EFEITOS ===== */

/**
 * Adiciona efeito de scroll suave aos links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Adiciona classe de animação ao carregar a página
 */
document.addEventListener('DOMContentLoaded', function() {
    // Anima os cards de produtos ao carregar
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

/* ===== UTILITÁRIOS ===== */

/**
 * Valida e formata o e-mail
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Log para debug (remover em produção)
 */
function debugLog(message, data = null) {
    if (process.env.NODE_ENV === 'development') {
        console.log(`[DEBUG] ${message}`, data);
    }
}


