// ============================================
// EXERCÍCIOS DE MAP
// ============================================

// --------------------------------------------
// EXERCÍCIO 1: Converter temperaturas de Celsius para Fahrenheit
// Enunciado: Dado um array de temperaturas em Celsius, retorne um novo array
// com as temperaturas convertidas para Fahrenheit usando a fórmula: F = (C * 9/5) + 32
// Arredonde o resultado para 1 casa decimal.
// --------------------------------------------

const temperaturasCelsius = [0, 15, 25, 30, 37, 100, -5];

// Escreva sua solução aqui:
const converter = temperaturasCelsius.map((num) =>{
  let f =  (num * 9/5) + 32;
  return parseFloat(f.toFixed(1));
})
//console.log(converter)
// --------------------------------------------
// EXERCÍCIO 2: Extrair nomes de produtos (Array de Objetos #1)
// Enunciado: Dado um array de produtos, retorne um novo array
// contendo apenas os nomes dos produtos em letras maiúsculas.
// --------------------------------------------

const produtos = [
  { nome: "Notebook", preco: 3500, quantidade: 5 },
  { nome: "Mouse", preco: 80, quantidade: 0 },
  { nome: "Teclado", preco: 150, quantidade: 12 },
  { nome: "Monitor", preco: 900, quantidade: 0 },
  { nome: "Webcam", preco: 200, quantidade: 8 }
];

// Escreva sua solução aqui:
const nomesGrandes = produtos.map((obj) =>{
  return obj.nome.toUpperCase();
})

//console.log(nomesGrandes)

// --------------------------------------------
// EXERCÍCIO 3: Calcular valor total em estoque (Array de Objetos #2)
// Enunciado: Dado um array de produtos, retorne um novo array de objetos
// contendo o nome do produto e o valor total em estoque (preco * quantidade).
// --------------------------------------------

const itens = [
  { nome: "Camiseta", preco: 50, quantidade: 20 },
  { nome: "Calça", preco: 120, quantidade: 15 },
  { nome: "Tênis", preco: 200, quantidade: 8 },
  { nome: "Meia", preco: 15, quantidade: 50 },
  { nome: "Boné", preco: 40, quantidade: 25 }
];

// Escreva sua solução aqui:
const valorTotalEstoque = itens.map((obj) =>{
  return {nome: obj.nome, valorTotal: obj.preco * obj.quantidade}
})

//console.log(valorTotalEstoque);

// --------------------------------------------
// EXERCÍCIO 4: Adicionar sufixo às strings
// Enunciado: Dado um array de nomes de arquivos, retorne um novo array
// com todos os nomes tendo o sufixo "_backup" adicionado antes da extensão.
// Exemplo: "foto.jpg" -> "foto_backup.jpg"
// --------------------------------------------

const arquivos = ["documento.pdf", "foto.jpg", "planilha.xlsx", "video.mp4", "musica.mp3"];

// Escreva sua solução aqui:
/* 
const teste = arquivos[0].split('.');
const novoTexto = teste[0] + "_backup" + "." + teste[1];
console.log(novoTexto) documento_backup.pdf */

const convertidos = arquivos.map((valor) =>{
  const separar = valor.split(".");
  const extensao = separar.pop(); // pega último elemento (extensão)
  const nome = separar.join("."); // junta o resto
  return `${nome}_backup.${extensao}`;
})

console.log(convertidos)

// --------------------------------------------
// EXERCÍCIO 5: Formatar dados de alunos (Array de Objetos #3)
// Enunciado: Dado um array de alunos, retorne um novo array de strings
// no formato: "Nome: [nome] | Nota: [nota] | Status: [Aprovado/Reprovado]"
// Considere aprovado se nota >= 7.
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
const paraString = alunos.map((obj) =>{
  
  const textoAprovado = `Nome: ${obj.nome} | Nota: ${obj.nota} | Status: Aprovado`
  const textoReprovado = `Nome: ${obj.nome} | Nota: ${obj.nota} | Status: Reprovado`
  if(obj.nota >= 7){
    return textoAprovado;
  }else{
    return textoReprovado;
  }
})
console.log(paraString) 