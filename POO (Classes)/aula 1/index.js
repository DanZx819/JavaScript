class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('Daniel', 'Zanchetta');
const p2 = new Pessoa('Leandro', 'Zanchetta');
const p3 = new Pessoa('Kauã', 'Zanchetta');
console.log(p1);
console.log(p2);
console.log(p3);
