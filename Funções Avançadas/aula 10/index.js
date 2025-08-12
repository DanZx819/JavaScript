// Função Construtora -> Objetos
// Função Fabrica -> Objetos
// Construtora -> Pessoa (new)
// New -> Cria um objeto vazio e retorna.

function Pessoa(nome, sobrenome){
    const id = 1241541;
    
    //Atributos ou metodos Privadas

    const metodoInterno = function(){

    };

    //Atributos ou metodos publicos

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function (){
        console.log(this.nome + ' ' + 'Sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome, p2.nome);
p2.metodo();