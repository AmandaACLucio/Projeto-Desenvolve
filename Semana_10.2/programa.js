//arrays
const notas = [10, 6, 8];
notas.push(7); //adiciona no fina

notas.pop(); //remove do final

console.log(notas);


//media notas
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
const media = soma / notas.length;

console.log(media);

//fatia

const nomes = ['João', 'Maria', 'José', 'Antônio', 'Miguel', 'Ana', 'Isabel', 'Manoel', 'Sofia', 'Francisco'];

const grupo1 = nomes.slice(0, nomes.length / 2);
const grupo2 = nomes.slice(nomes.length / 2);


//concatenar

grupo3 = grupo1.concat(grupo2);
console.log(grupo3);


//arrays de 2 dimensões

const alunos = ['João', 'Maria', 'José', 'Antônio', 'Miguel', 'Ana', 'Isabel', 'Manoel', 'Sofia', 'Francisco'];

const notasAlunos = [5, 7, 9, 6, 8, 10, 6, 4, 7, 8];

let listaNotasAlunos = [alunos, notasAlunos];

console.log(`Estudante ${listaNotasAlunos[0][0]} tirou nota ${listaNotasAlunos[1][0]}`);


//procurando aluno

const exibeNomeNota = (nomeAluno) =>{
    if(listaNotasAlunos[0].includes(nomeAluno)){
        const indice = listaNotasAlunos[0].indexOf(nomeAluno);
        console.log(`Estudante ${listaNotasAlunos[0][indice]} tirou nota ${listaNotasAlunos[1][indice]}`);
    }else{

        console.log("Aluno não encontrado");
    }

}

exibeNomeNota("Sofia");

//for

const numeros = [100, 200, 300, 400, 500, 600]
for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i]);
}


//forEach

soma = 0;
numeros.forEach(numero =>{
    soma+=numero
});

let mediaForEach = soma/numeros.length;
console.log(mediaForEach);

const nome = ['João', 'Maria', 'José', 'Antônio', 'Miguel', 'Ana', 'Isabel', 'Manoel', 'Sofia', 'Francisco'];

nome.forEach(ImprimeNome);

function ImprimeNome(nome){
    console.log(nome);
}

//map

const notasAno = [10, 6, 8, 7, 9];

const notasAtualizadas = notasAno.map(nota => (nota==10? nota : ++nota));

console.log(notasAtualizadas);

const nomesSemUpper = ['ana Julia', 'Caio vinicius', 'BIA silva'];


const nomesAtualizados = nomesSemUpper.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);


//filter

const nomesAlunos = ['João', 'Maria', 'José', 'Antônio', 'Miguel', 'Ana', 'Isabel', 'Manoel', 'Sofia', 'Francisco'];

const notasDosAlunos = [5,3 , 9, 6, 8, 4.8, 6, 4, 7, 8];

const reprovados = nomesAlunos.filter( (_, indice) => notasDosAlunos[indice] < 5);

console.log(reprovados);


//reduce

const salaJs = [10, 7.3, 9.8, 6.7];
const salaJava = [7, 3.8, 8.1, 10];
const SalaPython = [8, 6.7, 8.9, 7.7];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual+acumulador, 0);
    return somaDasNotas/notasDaSala.length;
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJs)}`);
console.log(`Média da sala de Java ${mediaSala(salaJava)}`);
console.log(`Média da sala de Python ${mediaSala(SalaPython)}`);

