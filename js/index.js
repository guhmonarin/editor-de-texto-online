const linguagem = document.querySelector('.conteudo__menu__direito__lista__personalizacao');
const areaDoCodigo = document.querySelector('.conteudo__editor__box');
const botao = document.querySelector('.conteudo__editor__botao');

const botaoCor = document.querySelector('.conteudo__menu__direito__lista__cor__botao');
const fundoCor = document.querySelector('.conteudo__editor__box');

const menuHamburguer = document.getElementById('menu-hamburguer');
const menuHamburguerNav = document.getElementById('menu-hamburguer-nav');

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText;
    areaDoCodigo.innerHTML = `<code class="conteudo__editor__memo hljs ${linguagem.value}" contenteditable="true"></code>`;
    areaDoCodigo.querySelector('code').textContent = codigo;
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight();
})

function selecionaCor() {
    const cor = botaoCor.value;
    fundoCor.style.backgroundColor=cor;
    console.log(fundoCor);
}

botaoCor.addEventListener('input', selecionaCor);

menuHamburguer.addEventListener('click', function() {
    menuHamburguerNav.classList.toggle('open');
  });