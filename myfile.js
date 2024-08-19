const original = document.getElementById("Original")
const button = document.querySelector('button')
button.addEventListener('click',() =>{
    const cambiado = 'Texto Cambiado'
    original.textContent = cambiado
})