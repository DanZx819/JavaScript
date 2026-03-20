// ============================================
// EXERCÍCIOS DE FILTER
// ============================================

// --------------------------------------------
// EXERCÍCIO 1: Filtrar números pares
// Enunciado: Dado um array de números, retorne apenas os números pares.
// --------------------------------------------

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Escreva sua solução aqui:
const pares = numeros.filter((num) =>{
  return num % 2 === 0;
})

//console.log(pares);

// --------------------------------------------
// EXERCÍCIO 2: Filtrar produtos em estoque (Array de Objetos #1)
// Enunciado: Dado um array de produtos, retorne apenas os produtos
// que estão em estoque (quantidade > 0).
// --------------------------------------------

const produtos = [
  { nome: "Notebook", preco: 3500, quantidade: 5 },
  { nome: "Mouse", preco: 80, quantidade: 0 },
  { nome: "Teclado", preco: 150, quantidade: 12 },
  { nome: "Monitor", preco: 900, quantidade: 0 },
  { nome: "Webcam", preco: 200, quantidade: 8 }
];



// Escreva sua solução aqui:
const contemEstoque = produtos.filter((obj) =>{
  return obj.quantidade > 0;
});
//console.log(contemEstoque);

// --------------------------------------------
// EXERCÍCIO 3: Filtrar alunos aprovados (Array de Objetos #2)
// Enunciado: Dado um array de alunos com suas notas, retorne apenas
// os alunos que foram aprovados (nota >= 7).
// --------------------------------------------

const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 7.5 },
  { nome: "Daniela", nota: 5.5 },
  { nome: "Eduardo", nota: 9.0 },
  { nome: "Fernanda", nota: 7.0 }
];



// Escreva sua solução aqui:
const aprovados = alunos.filter((obj) =>{
  return obj.nota >= 7;
})

//console.log(aprovados)


// --------------------------------------------
// EXERCÍCIO 4: Filtrar strings com mais de 5 caracteres
// Enunciado: Dado um array de palavras, retorne apenas as palavras
// que possuem mais de 5 caracteres.
// --------------------------------------------

const palavras = ["sol", "cachorro", "gato", "casa", "bicicleta", "mar", "avião"];

// Escreva sua solução aqui:
const maioresQue5 = palavras.filter((valor) =>{
  return valor.length > 5;
})

//console.log(maioresQue5)
// --------------------------------------------
// EXERCÍCIO 5: Filtrar usuários ativos maiores de idade (Array de Objetos #3)
// Enunciado: Dado um array de usuários, retorne apenas os usuários
// que estão ativos E têm 18 anos ou mais.
// --------------------------------------------

const usuarios = [
  { nome: "João", idade: 25, ativo: true },
  { nome: "Maria", idade: 17, ativo: true },
  { nome: "Pedro", idade: 30, ativo: false },
  { nome: "Lucia", idade: 22, ativo: true },
  { nome: "Marcos", idade: 16, ativo: false },
  { nome: "Julia", idade: 19, ativo: true }
];

// Escreva sua solução aqui:

const maioresDeIdade = usuarios.filter((obj) =>{
  return obj.idade >= 18 && obj.ativo === true;
});
//console.log(maioresDeIdade)

