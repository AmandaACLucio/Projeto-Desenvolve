 function showNumberScreen(event) {
    const number = event.target.value
    const screenFone = document.querySelector('input[type=tel]')

    if (screenFone.value.length<9 && number != undefined) {
        screenFone.value += number
        console.log(number)
    }
}


document.querySelector('.teclado').addEventListener('click', showNumberScreen)


const listaDeTeclas = document.querySelectorAll('input[type=button]')

listaDeTeclas.forEach(tecla => {
    tecla.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
})