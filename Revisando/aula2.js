
const numeros = [5, 50, 80, 1,2,3,5,8,7,11,15,22,27];

const numerosEmDobro = numeros.map((valor) =>{
 return valor * 2;
})

/* console.log(numerosEmDobro) */

const pessoas = [
    {nome:"Luiz", idade:62},
    {nome:"Daniel", idade:24},
    {nome:"Daniela", idade:30},
    {nome:"Bruna", idade:55},
    {nome:"Jorge", idade:19}
]

const nomes = pessoas.map((obj) =>{
    return obj.nome;
})

//console.log(nomes)

const idade = pessoas.map((obj) =>{
    delete obj.nome
    return obj;
})

//console.log(idade)

const id = pessoas.map((obj, indice) =>{
    obj.id = indice + 1;
    return obj  
})
console.log(id)