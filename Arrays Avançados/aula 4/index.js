//Array Filter -> Filter, Map, Reduce

//Filter -> Sempre retorna um array com a mesma quantidade de elementos ou menos

//Retorne os números maiores que 10

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// function callbackFilter(valor){
//    return valor > 10;
// }

//  const numerosFiltrados = numeros.filter( (valor, indice, array) =>{
// //    console.log(valor, indice, array);
//    return valor > 10;
// });
const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Daniel', idade: 18},
    {nome: 'Joao', idade: 8},
    {nome: 'Pedro', idade: 16},
    {nome: 'Julia', idade: 40},
    {nome: 'Sofia', idade: 37},
    {nome: 'Gonçalves', idade: 18},
];

const pessoasNOME = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoas30 = pessoas.filter(obj => obj.idade > 30);
const pessoasA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
for(let pessoa of pessoasNOME){
    console.log(pessoa.nome)
}
console.log('*************')
for(let pessoa of pessoas30){
    console.log(pessoa.nome, pessoa.idade)
}
console.log('*************')
for(let pessoa of pessoasA){
    console.log(pessoa.nome)
}











// const numeros2 = [1,2,3,4,5,50,20,11];

// const numerosFiltrados2 = numeros2.filter(callbackFilter);

// console.log(numerosFiltrados2)
// let num10 = [];
// for(let num of numeros2){
    
//     if (num > 10) {
//         num10.splice(0,0, num);

//     }
// }
// console.log(num10)
