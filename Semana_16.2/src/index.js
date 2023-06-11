import chalk from "chalk";
import fs from "fs";

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !==0 ? resultados : chalk.red("Não foram encontrados links no arquivo");
  }


function trataErro(erro){
    throw new Error(chalk.red(erro.code, "não foi possível ler o arquivo"));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = "utf-8";
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    } catch(erro){
        trataErro(erro);
    }
}

export default pegaArquivo;