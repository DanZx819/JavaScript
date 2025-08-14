//Aula de Reduce
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

//Somar todos
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0); //Valor inicial


const pares = numeros.reduce((acumulador, valor) =>{
    
    if (valor % 2 === 0) {
        acumulador.splice(0,0,valor)
    }

    return acumulador;
}, [])



console.log(total);
console.log(pares);


//Retorne a pessoa mais velha


const pessoas = [
    {nome: 'Daniel', idade: 48},
    {nome: 'Joao', idade: 8},
    {nome: 'Pedro', idade: 16},
    {nome: 'Julia', idade: 40},
    {nome: 'Sofia', idade: 37},
    {nome: 'Gonçalves', idade: 18},
];

const velha = pessoas.reduce((acumulador, valor)=>{


    if (acumulador.idade > valor.idade) {
        return acumulador;
    }
    return valor;

})//Se não tem um número pré definido o acumulador é o prieiro item do array

console.log(velha);