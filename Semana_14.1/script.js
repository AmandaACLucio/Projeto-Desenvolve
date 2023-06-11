async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById("erro");
    mensagemErro.innerHTML = "";
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            console.log("CEP inválido");
        }
        var cidade = document.getElementById("cidade");
        var logradouro = document.getElementById("endereco");
        var estado = document.getElementById("estado");
        var bairro = document.getElementById("bairro");

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;
        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;
        
    } catch (erro) {
        mensagemErro.innerHTML = "<p>CEP inválido</p>";
        console.log(erro);
    }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", ()=>buscaEndereco(cep.value));

//fetch é um método assíncrono que retorna uma promise
//promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona
