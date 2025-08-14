// Aula de Map

//Dobrar Valores
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const dobro = numeros.map((valor) => valor * 2);
// console.log(dobro);
const pessoas = [
    {nome: 'Daniel', idade: 18},
    {nome: 'Joao', idade: 8},
    {nome: 'Pedro', idade: 16},
    {nome: 'Julia', idade: 40},
    {nome: 'Sofia', idade: 37},
    {nome: 'Gonçalves', idade: 18},
];

const nomes = pessoas.map(obj =>{
    return obj.nome;
});

const idades = pessoas.map(obj => {
    // delete valor.nome;
    return {idade: obj.idade};
});

const id = pessoas.map((obj, indice) =>{
    const newObj = {...obj};
    newObj.id = indice + 1;
    return newObj;
});

console.log(pessoas);

// console.log(idades);
// console.log(nomes);
console.log(id);