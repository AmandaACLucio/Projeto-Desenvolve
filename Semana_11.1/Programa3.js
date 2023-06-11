function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const andre = new Cliente('Andre', '12345678900', '12345678900', "andre@gmail.com", 100)

console.log(andre)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca('Ju', '12345678900', 'ju@gmail.com', 100, 200)


ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

ju.depositarPoup(100)

console.log(ju)


// OO

