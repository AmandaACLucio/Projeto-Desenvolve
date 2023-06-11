import pegaArquivo from "./index.js";
import fs from "fs";

const caminho = process.argv;


async function processaTexto(argumentos){
    if(argumentos.length !== 3){
        console.log("Por favor, insira o caminho do arquivo");
        return;
    }
    const caminho = argumentos[2];

    try{
        fs.lstatSync(caminho);
    }catch(erro){
        if(erro.code === "ENOENT"){
            console.log("Arquivo ou diretório não encontrado");
            return;
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultados = await pegaArquivo(caminho[2]);
        console.log(resultados);

    }else if(fs.lstatSync(caminho).isDirectory()){

        const arquivos = await fs.promises.readdir(caminho);
        const arquivosMd = arquivos.filter(arquivo => arquivo.endsWith(".md"));
        arquivosMd.forEach(async arquivo => {
            const resultados = await pegaArquivo(`${caminho}/${arquivo}`);
            console.log(resultados);
        });
    }
}

processaTexto(caminho);