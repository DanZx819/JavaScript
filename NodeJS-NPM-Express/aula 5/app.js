const path = require('path');
const caminhoArquivo = path.resolve(__dirname,  'test.json');

const escreve = require('./modules/escreve');

const ler = require('./modules/ler')

// const pessoas = [
//     {nome: 'Daniel0'},
//     {nome: 'Daniel1'},
//     {nome: 'Daniel2'},
//     {nome: 'Daniel3'}
// ]

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json)

async function leArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    for(let i of dados){
        console.log(i)
    }
}

leArquivo(caminhoArquivo)