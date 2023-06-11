/* var arraySons = ['pom', 'clap', 'tim', 'puff', 'splash', 'toim', 'psh', 'tic', 'tom']

function tocaSom(event){
    var tecla = event.target.className.split('_')[1]
    document.querySelector(`#som_tecla_${tecla}`).play()

}

arraySons.forEach(som=>{
    document.querySelector(`.tecla_${som}`).onclick = tocaSom
}) */

/* document.querySelectorAll('.tecla').forEach(tecla=>{
    tecla.onclick = function(event){
        var tecla = event.target.className.split('_')[1]
        document.querySelector(`#som_tecla_${tecla}`).play()
    }
})
 */

const listaDeTeclas = document.querySelectorAll('.tecla')

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio)
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log(`Elemento não encontrado: ${seletorAudio}`)
    }
}

for(let contador=0; contador < listaDeTeclas.length; contador++){
    
    const tecla = listaDeTeclas[contador]
    const instrumento= tecla.classList[1]

    const idAudio = `#som_${instrumento}`    
    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }

}
