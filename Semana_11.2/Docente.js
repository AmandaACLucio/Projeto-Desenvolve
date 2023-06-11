import User from "./User.js";

export default class Docente extends User {

    constructor(nome, email, nascimento, role="docente", ativo= true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado no curso ${curso}`
    }
}

const novoAdmin = new Docente('Jade', 'r@r.com', '18/10/1980')
console.log(novoAdmin.aprovaEstudante('Juliana', 'Js'))