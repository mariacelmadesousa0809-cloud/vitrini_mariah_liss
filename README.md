# Mariah Liss - Projeto de E-commerce Premium

Bem-vindo ao projeto **Mariah Liss - Curadoria de Engenharia de Elite**! Este é um site de e-commerce profissional, moderno e totalmente responsivo.

---

## 📁 Estrutura do Projeto

```
mariah_liss_projeto/
├── index.html              # Página principal
├── obrigado.html           # Página de confirmação de contato
├── README.md               # Este arquivo
├── css/
│   ├── styles.css          # Estilos principais (header, footer, produtos, etc.)
│   └── modal.css           # Estilos do modal de contato
├── js/
│   └── interactions.js      # Lógica de interações (modal, formulário, etc.)
└── images/                 # Pasta para suas imagens
    ├── logo.jpeg
    ├── garrafa azul.png
    ├── garrafa dourada.avif
    ├── imagem duas garrafas.jpg
    ├── Moedor Precision Wancle.png
    ├── cubos de gelo.png
    └── Organizador de viagem.png
```

---

## 🚀 Como Usar

### 1. Preparar o Projeto Localmente

1. Coloque todos os arquivos em uma pasta no seu computador.
2. Certifique-se de que a pasta `images/` contém todas as imagens dos produtos.
3. Abra o arquivo `index.html` em um navegador ou use um servidor local.

### 2. Usar com VS Code (Recomendado)

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server** (por Ritwick Dey).
3. Clique com botão direito em `index.html` e selecione **"Open with Live Server"**.
4. O site abrirá em `http://localhost:5500/`.

### 3. Configurar o Formspree (Para Receber E-mails)

1. Acesse **https://formspree.io** e crie uma conta gratuita.
2. Crie um novo formulário e copie o ID gerado.
3. No arquivo `index.html`, localize a linha:
   ```html
   <form id="contactForm" action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
   ```
4. Substitua `SEU_ID_AQUI` pelo ID que você copiou.
5. Também atualize a URL de redirecionamento:
   ```html
   <input type="hidden" name="_next" value="https://seusite.com/obrigado.html">
   ```
   Substitua `https://seusite.com/obrigado.html` pela URL real do seu site.

---

## 🎨 Personalização

### Alterar Cores

As cores principais estão definidas em `css/styles.css` como variáveis CSS:

```css
:root {
    --color-primary: #d4af37;           /* Dourado */
    --color-primary-light: #f4d03f;     /* Dourado claro */
    --color-dark-bg: #0a0e27;           /* Fundo escuro */
    --color-text-primary: #ffffff;      /* Texto branco */
    /* ... outras variáveis ... */
}
```

Altere esses valores para personalizar as cores do site.

### Adicionar Novos Produtos

1. Abra `index.html`.
2. Localize a seção `.products-grid`.
3. Copie um card de produto existente e modifique os dados:

```html
<div class="product-card">
    <div class="discount-badge">DESCONTO%</div>
    <div class="img-container">
        <img src="images/seu-produto.png" alt="Descrição">
    </div>
    <div class="rating">
        <span class="stars">★★★★★</span>
        <span class="rating-number">4.9</span>
    </div>
    <h2>Nome do Produto</h2>
    <p>Descrição breve do produto.</p>
    <div class="price-box">
        <div>
            <span class="old-price">R$ XXX,00</span>
            <span class="new-price">R$ XXX,90<small class="pix-tag">no Pix</small></span>
        </div>
    </div>
    <a href="https://seu-link-mercado-pago" target="_blank" class="btn-buy">Comprar Agora</a>
</div>
```

### Alterar Textos

Todos os textos estão diretamente no HTML. Procure e altere conforme necessário.

---

## 📱 Responsividade

O projeto foi desenvolvido com **Mobile First** e é totalmente responsivo. Teste em diferentes tamanhos de tela:

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** até 767px

---

## 🔧 Funcionalidades

### ✅ Modal de Contato
- Abre ao clicar em "ABRIR CHAMADO POR E-MAIL"
- Integrado com Formspree para receber e-mails
- Redireciona para página de obrigado após envio

### ✅ Ticker de Notícias
- Animação contínua de informações importantes
- Personalizável com suas mensagens

### ✅ Cards de Produtos
- Hover com efeitos visuais
- Avaliações em estrelas
- Badges de desconto
- Preços com "De" e "Por"

### ✅ Footer Profissional
- Ícones de confiança
- Rastreio de pedidos
- Informações de pagamento
- Suporte ao cliente

---

## 📊 Análise do Projeto (STEPPS - Contágio)

Este projeto foi desenvolvido seguindo os princípios do livro **"Contágio"** de Jonah Berger:

1. **Moeda Social:** Aço 316 como padrão de elite
2. **Gatilhos:** Associação com performance e qualidade
3. **Emoção:** Orgulho de possuir produtos premium
4. **Público:** Design marcante e visível
5. **Valor Prático:** Durabilidade e funcionalidade
6. **Histórias:** Narrativa de "Curadoria de Elite"

---

## 🐛 Troubleshooting

### Problema: As imagens não aparecem
- **Solução:** Certifique-se de que a pasta `images/` está no mesmo diretório que `index.html`.
- Verifique se os nomes dos arquivos estão corretos (case-sensitive).

### Problema: O modal não abre
- **Solução:** Verifique se o arquivo `js/interactions.js` está sendo carregado.
- Abra o console do navegador (F12) e procure por erros.

### Problema: Formulário não envia e-mails
- **Solução:** Verifique se o ID do Formspree está correto no atributo `action`.
- Teste a conta do Formspree diretamente no site deles.

### Problema: Redirecionamento não funciona
- **Solução:** Certifique-se de que o arquivo `obrigado.html` está no mesmo diretório que `index.html`.
- Verifique se a URL em `_next` está correta.

---

## 📞 Suporte

Se tiver dúvidas ou problemas:

1. Verifique o console do navegador (F12 → Console) para erros.
2. Consulte a documentação do Formspree: https://formspree.io/help
3. Teste em diferentes navegadores.

---

## 📄 Licença

Este projeto é fornecido como está. Sinta-se livre para modificar e personalizar conforme necessário.

---

## 🎯 Próximos Passos

1. ✅ Configurar o Formspree
2. ✅ Adicionar suas imagens na pasta `images/`
3. ✅ Personalizar cores e textos
4. ✅ Testar em mobile
5. ✅ Fazer upload para seu servidor

---

**Desenvolvido com ❤️ para Mariah Liss - Curadoria de Engenharia de Elite**
