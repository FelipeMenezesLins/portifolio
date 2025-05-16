let menu = document.querySelector('#menu')

let conteudo = document.querySelector('#conteudo')

let menuanimation = document.getElementById('menuanimation')

menu.addEventListener('click', ()=> {
    menuanimation.style.transform = 'translateX(0)'
    conteudo.style.transform = 'translateX(0)'
    menuanimation.style.opacity = 1
    conteudo.style.opacity = 1

})

conteudo.addEventListener('click', ()=>{
    event.stopPropagation()
})

menuanimation.addEventListener('click', ()=>{
    menuanimation.style.transform = 'translateX(-100%)'
    conteudo.style.transform = 'translateX(-100%)'
    menuanimation.style.opacity = 0
    conteudo.style.opacity = 0
})