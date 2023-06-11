//objetos

const listaCpfs = ['12333354', '1212365456', '112215463']

const cliente = {
    nome: 'Rafael',
    idade: 25,
    cpf: '12345678900',
    email: 'Rafael@gmail.com'
}

//print infos cliente

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`);

console.log(cliente.cpf.substring(0,3) + '.' + cliente.cpf.substring(3,6) + '.' + cliente.cpf.substring(6,9) + '-' + cliente.cpf.substring(9,11));


const chaves = Object.keys(cliente);
console.log(`Meu nome é ${cliente[chaves[0]]} e tenho ${cliente[chaves[1]]} anos`);

chaves.forEach(info => console.log(cliente[info]));

//adicionar propriedade

cliente.fone = '999999999';