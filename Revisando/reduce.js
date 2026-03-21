// ============================================
// EXERCÍCIOS COM REDUCE
// Resolva cada exercício abaixo usando o método reduce()
// ============================================

// --------------------------------------------
// EXERCÍCIO 1: Somar todos os números de um array
// --------------------------------------------
// Dado um array de números, calcule a soma total de todos os elementos.
//
// Exemplo:
// Entrada: [10, 20, 30, 40, 50]
// Saída esperada: 150
//
// Dica: O acumulador começa em 0 e você soma cada valorAtual

const numeros1 = [10, 20, 30, 40, 50];

// Sua solução aqui:
const soma = numeros1.reduce((acumulador, valor)=>{
    return acumulador + valor;
}, 0)

//console.log(soma)

// --------------------------------------------
// EXERCÍCIO 2: Contar quantidade de cada palavra
// --------------------------------------------
// Dado um array de palavras, retorne um objeto com a quantidade de vezes
// que cada palavra aparece no array.
//
// Exemplo:
// Entrada: ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã']
// Saída esperada: { maçã: 3, banana: 2, laranja: 1 }
//
// Dica: O acumulador começa como {}. Verifique se a palavra já existe
// no objeto, se sim incremente, se não crie com valor 1

const palavras = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

// Sua solução aqui:
const repetir = palavras.reduce((acumulador, valor) =>{
    acumulador[valor] = (acumulador[valor]|| 0) + 1;
    return acumulador;
}, {})

//console.log(repetir)
// --------------------------------------------
// EXERCÍCIO 3: Agrupar pessoas por faixa etária
// --------------------------------------------
// Dado um array de pessoas (com nome e idade), agrupe-as em duas categorias:
// 'adultos' (18 anos ou mais) e 'menores' (menos de 18 anos).
// Retorne um objeto com essas duas propriedades contendo arrays de nomes.
//
// Exemplo:
// Entrada: [
//   { nome: 'Ana', idade: 15 },
//   { nome: 'Bruno', idade: 25 },
//   { nome: 'Carlos', idade: 17 }
// ]
// Saída esperada: { menores: ['Ana', 'Carlos'], adultos: ['Bruno'] }
//
// Dica: Verifique a idade para decidir a chave, depois adicione o nome ao array

const pessoas = [
    { nome: 'Ana', idade: 15 },
    { nome: 'Bruno', idade: 25 },
    { nome: 'Carlos', idade: 17 },
    { nome: 'Diana', idade: 32 },
    { nome: 'Eduardo', idade: 14 }
];

// Sua solução aqui:


const separar = pessoas.reduce((acumulador, obj)=>{
    if(obj.idade < 18){
        acumulador['menores'].push(obj.nome)
    }else{
        acumulador['maiores'].push(obj.nome)
    }
    return acumulador
}, {
    menores: [],
    maiores: []
})
//console.log(separar)

// --------------------------------------------
// EXERCÍCIO 4: Calcular valor total do carrinho de compras
// --------------------------------------------
// Dado um array de itens do carrinho (com produto, preço e quantidade),
// calcule o valor total considerando preço × quantidade de cada item.
//
// Exemplo:
// Entrada: [
//   { produto: 'Camiseta', preco: 50, quantidade: 2 },
//   { produto: 'Calça', preco: 120, quantidade: 1 }
// ]
// Saída esperada: 220 (50*2 + 120*1)
//
// Dica: Multiplique preco por quantidade e some ao acumulador

const carrinho = [
    { produto: 'Camiseta', preco: 50, quantidade: 2 },
    { produto: 'Calça', preco: 120, quantidade: 1 },
    { produto: 'Meia', preco: 15, quantidade: 3 }
];

// Sua solução aqui:

const carrinhoSoma = carrinho.reduce((acumulador, valor)=>{
    return acumulador + (valor.preco * valor.quantidade)
}, 0)

//console.log(carrinhoSoma)

// --------------------------------------------
// EXERCÍCIO 5: Classificar produtos por categoria
// --------------------------------------------
// Dado um array de produtos (com nome, preco e categoria),
// agrupe-os em duas listas: 'eletronicos' (preco > 1000) e 'acessiveis' (preco <= 1000).
// Retorne um objeto com essas duas propriedades contendo arrays de nomes.
//
// Exemplo:
// Entrada: [
//   { nome: 'Celular', preco: 2000, categoria: 'eletronicos' },
//   { nome: 'Camiseta', preco: 50, categoria: 'roupas' },
//   { nome: 'Notebook', preco: 5000, categoria: 'eletronicos' }
// ]
// Saída esperada: {
//   eletronicos: ['Celular', 'Notebook'],
//   acessiveis: ['Camiseta']
// }
//
// Dica: Assim como no ex3, inicialize o acumulador com { eletronicos: [], acessiveis: [] }
// e use o preco para decidir em qual array adicionar o nome

const produtos = [
    { nome: 'Celular', preco: 2000 },
    { nome: 'Camiseta', preco: 50 },
    { nome: 'Notebook', preco: 5000 },
    { nome: 'Calça', preco: 120 },
    { nome: 'Fone Bluetooth', preco: 300 },
    { nome: 'Smart TV', preco: 3500 }
];

// Sua solução aqui:

const separarCategoria = produtos.reduce((acumulador, valor)=>{
    if(valor.preco > 1000){
        acumulador['eletronicos'].push(valor.nome)
    }else{
        acumulador['acessiveis'].push(valor.nome)
    }
    return acumulador
}, {
    eletronicos: [],
    acessiveis: []
})

console.log(separarCategoria)