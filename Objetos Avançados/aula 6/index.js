// //Manipulando Prototypes

// // new Object -> Object.prototype

// const objA = {
//     chaveA: 'A'
//     //__proto__: Object.prototype
// }

// // new Object -> Object.prototype

// const objB = {
//     chaveA: 'B'
//     //__proto__: objA
// }

// const objC = {
//     chaveA: 'C'
//     //__proto__: objA
// }


// Object.setPrototypeOf(objB, objA); // proto do B vira o objA
// Object.setPrototypeOf(objC, objB);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumenta = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
// p1.desconto(100);
// p1.aumenta(100);

//Literal
const p2 = {
    nome: 'Canenca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

// console.log(p1); 
// p2.aumenta(20);
// console.log(p2); 

p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 30
    }
});
p3.preco = 100;
p3.aumenta(20);

console.log(p3);