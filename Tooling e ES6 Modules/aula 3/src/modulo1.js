const nome = 'Daniel';
const sobrenome = 'Zanchetta'
const idade = 18;

function soma(x,y){
    return x + y;
}

export {nome, sobrenome, idade, soma};

export default (x, y) => {
    return x * y;
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        
    }

    verNome(){
        return console.log(nome + " " + sobrenome);
    }
}