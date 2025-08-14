// //Revisao de Objetos

// const pessoa = {
//      nome: 'Daniel',
//      idade: 18,
// };

// // const pessoa = new Object();
// // pessoa.nome = 'Daniel';
// // pessoa.idade = 18;


// // delete pessoa.nome;
// pessoa.falarNome = function(){
//     return console.log(`${this.nome} está falando o seu nome.`);
// } 
// pessoa.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }
// console.log(pessoa['nome']);
// console.log(pessoa.idade);
// pessoa.falarNome();
// console.log(pessoa.getDataNascimento());

// for(let chave in pessoa){
//     console.log(pessoa[chave]);
// }

//Factory Functions / Constructor Functions / Classes

// function criaPessoa(nome, sobrenome){
//     return {
//         nome,
//         sobrenome,

//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Daniel', 'Zanchetta');
// console.log(p1.nomeCompleto);



function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this -> Retorna o this 

const p1 = new Pessoa('Daniel', 'Zanchetta');

const p2 = new Pessoa('Sofia', 'Puta');

p1.nome = 'Leandro';

console.log(p1.nome, p1.sobrenome, p1);
console.log(p2.nome, p2.sobrenome, p2);