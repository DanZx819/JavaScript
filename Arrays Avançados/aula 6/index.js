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

const dobro = numeros.map((valor) =>{
    
    let dobroA = [];
    valor *= 2;
    dobroA.splice(0,0,valor)
    return dobroA;
})

console.log(total);
console.log(pares);
console.log(dobro)



const pessoas = [
    {nome: 'Daniel', idade: 18},
    {nome: 'Joao', idade: 8},
    {nome: 'Pedro', idade: 16},
    {nome: 'Julia', idade: 40},
    {nome: 'Sofia', idade: 37},
    {nome: 'Gonçalves', idade: 18},
];
