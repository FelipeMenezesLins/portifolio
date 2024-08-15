let img = document.getElementById('clicou')
let janela = document.getElementById('janela')
let x = document.getElementById('close')
img.addEventListener('click', ()=> {
    janela.style.display = 'flex'
})

x.addEventListener('click', ()=> {
    janela.style.display = 'none'
}) 

