const areaDoCodigo = document.querySelector('.principal_main_container_box_codigo-wrapper')
const linguagem = document.querySelector('.principal_main_projeto_formulario_linguagem')
const botao = document.querySelector('.principal_main_container_highlight')

function mudaLinguagem() {
    const codigo = {'texto': areaDoCodigo.querySelector('code').innerText}
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" 
contenteditable="true" aria-label="editor"></code>`
    areaDoCodigo.firstChild.innerText = codigo.texto
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})