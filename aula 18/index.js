// const pessoa1 = {
//     nome: 'Daniel',
//     sobrenome: 'Zanchetta',
//     idade: 18
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// function criaPessoa(nome, sobrenome, idade){
//     return{nome, sobrenome, idade};
// };

// const pessoa1 = criaPessoa('Daniel', 'Zanchetta', 18);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 18);
// const pessoa3 = criaPessoa('Pedro', 'Martins', 18);

// console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)


const pessoa1 = {
    nome: 'Daniel',
    sobrenome: 'Zanchetta',
    idade: 18,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} tem a idade de ${this.idade}.`);
    },
    incrementaIdade(){
        ++this.idade;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();