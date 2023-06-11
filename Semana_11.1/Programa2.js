const cliente = {
    nome: 'Rafael',
    idade: 25,
    cpf: '12345678900',
    email: 'Rafael@gmail.com',
    fones: ['55912345678', '5521987654321'],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}

cliente.fones.forEach(fone => console.log(fone))

cliente.dependentes = [{
    nome: 'Sara Silva',
    parentesco: 'filha',
    dataNasc: '20/03/2011'
}]


cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'filha',
    dataNasc: '04/01/2014'
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter((dependente => dependente.dataNasc === '04/01/2014'))

console.log(filhaMaisNova)

//relatorio

relatorio = ''
for (let info in cliente) {
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue
    }else {
        relatorio += `${info}: ${cliente[info]} \n`
    }
}

console.log(relatorio)

//oferta de seguro

const propsCliente = Object.keys(cliente)

function oferecerSeguro(obj) {
    const propsCliente = Object.keys(obj)
    if (propsCliente.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)

//espalhamento

const clientes = [
    {
        nome: 'Rafael',
        idade: 25,
        cpf: '12345678900',
        dependentes: [{
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '20/03/2011'
        },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }],
    },
    {
        nome: 'Alice',
        idade: 27,
        cpf: '12345678900',
        dependentes: [{
            nome: 'Marcos Paulo',
            parentesco: 'filho',
            dataNasc: '20/03/2011'
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)


//prototype

