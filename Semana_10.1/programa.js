var a = 10
var b = 0
console.log(a/b) // Infinity

//var

let forma = 'retangulo';
var altura = 5;
var comprimento = 7;

let area;
if (forma === 'retangulo') {
    area = altura * comprimento;
}else {
    area = (altura * comprimento) / 2;
}

console.log(area);

console.log(0==false);
console.log(0===false);

console.log(""==false);
console.log(""===false);

console.log(0=="");

console.log(1 == true);
console.log(1 === true);


//aula 4

const numero = 456;
const numeroString = "456";

console.log(numero+Number(numeroString));


c = [[1,2], [2,4]]
console.table(c)

const idadeMinima = 18;
const idade = 17;

console.log(idade >= idadeMinima? "Maior de idade" : "Menor de idade");


const nome = "João";
const sobrenome = "Silva";

console.log(`Meu nome é ${nome} ${sobrenome}`);


function soma(a,b){
    return a+b;
}

var multiplicacao = function(a,b){
    return a*b;
}

console.log(multiplicacao(1,2));


//arrow function

const soma = (a,b) => a+b;