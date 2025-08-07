//Atribuição via desestruturação

const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Zanchetta',
    idade: 30,
    endereço: {
        rua: 'José Pires de Almeida',
        numero: 26
    }
}
//Atribuição via desestruturação
// const {nome: n = '', sobrenome, idade} = pessoa;
// const { endereço: {rua: r = '', numero}, endereço} = pessoa;
// console.log(n, sobrenome, idade, r, numero, endereço);

const { nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);