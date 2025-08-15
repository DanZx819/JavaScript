
const Produto = {nome: 'Caneca', preco: 1.8};





// for(let [chave, valor] of Object.entries(Produto)){
//     console.log(chave, valor)
// }

// console.log(Object.entries(Produto))
// console.log(Object.values(Produto));
// console.log(Object.getOwnPropertyDescriptor(Produto, 'nome'));
// Object.defineProperty(Produto, 'nome',{
//     writable: false,
//     configurable: false
// })

// const outraCoisa = {
//     ...Produto,
//     material: 'porcelana',
// };

// const outraCoisa = Object.assign({}, Produto, {material: 'porcelana'});
// Object.freeze(Produto); //Freeza o produto
// outraCoisa.preco = 2.5;
// Produto.nome = 'Luiz'
// console.log(Produto);
// console.log(outraCoisa);

// console.log(Object.keys(Produto));