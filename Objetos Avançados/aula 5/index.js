//Prototypes

//Construtora

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

//Instância

const pessoa1 = new Pessoa('Daniel', 'Zanchetta'); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'A.');  // <- Pessoa = Função Construtora
const data = new Date();

console.log(pessoa1);
console.dir(pessoa2);
console.log(pessoa1.nomeCompleto())