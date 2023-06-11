const user = {
    nome: 'Rafael',
    idade: 23,
    email: 'rafael@gmail.com',
    nascimento: '01/01/1997',
    role: 'estudante',
    ativo : true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    idade: 23,
    email: 'mariana@gmail.com',
    role: 'admin',
    criarCurso(){
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()