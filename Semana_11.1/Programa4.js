class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const andre = new Cliente('Andre', '12345678900', 'andre@gmail.com', 100)

console.log(andre)

andre.exibirSaldo()


class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoup) {
        super(nome, cpf, email, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor) {
        this.saldoPoup += valor
    }
}

const ju = new ClientePoupanca('Ju', '12345678900', 'ju@gmail.com', 100, 200)

ju.depositarPoup(100)

console.log(ju)

const user = {
    nome: 'Rafael',
    idade: 23,
    email: 'rafael@gmail.com',
    nascimento: '01/01/1997',
    role: 'admin',
    ativo : true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}