let menu = document.querySelector('#menu')

let conteudo = document.querySelector('#conteudo')

menu.addEventListener('click', ()=> {
    if(conteudo.style.display == 'block') {
        conteudo.style.display = 'none'
    } else {
        conteudo.style.display = 'block'
    }
})