const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const robo = document.querySelector('[data-robo]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const robosLista = ['Robotron2000-Amarelo.png', 'Robotron2000-Azul.png', 'Robotron2000-Branco.png', 'Robotron2000-Preto.png', 'Robotron2000-Rosa.png', 'Robotron2000-Vermelho.png']

controle.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
       manipulaDados(event.target.dataset.controle, event.target.parentNode);
       atualizaEstatisticas(event.target.dataset.peca);
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');
    if (operacao === '-') {
        peca.value = parseInt(peca.value)-1;
    } else {
        peca.value = parseInt(peca.value)+1;
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
}

robo.addEventListener('click', (evento) => {
    const roboAtual = evento.target.src.split('/').pop();
    const index = robosLista.indexOf(roboAtual);
    evento.target.src = `robos/${robosLista[(index+1)%robosLista.length]}`;
});
