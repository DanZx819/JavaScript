//Aula sobre -> Object.defineProperty() e Object.defineProperties()

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor poderia ser uma função
        writable: true, // Pode alterar
        configurable: false // Configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Valor poderia ser uma função
            writable: true, // Pode alterar
            configurable: true // Configurável
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Valor poderia ser uma função
            writable: true, // Pode alterar
            configurable: true // Configurável
        },
    })

}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 500;
// delete p1.estoque;
// console.log(p1);
// console.log(Object.keys(p1))
console.log(p1);

for(let chave in p1){
    console.log(chave);
}


