

const numeros = [5, 50, 80, 1,2,3,5,8,7,11,15,22,27];
//Some todos os números (reduce)
/* const total = numeros.reduce((acumulador, valor)=>{
    return acumulador + valor;
}, 0)

const pares = numeros.filter((valor) =>{
    return valor % 2 === 0;
})

const somarPares = pares.reduce((acumulador, valor) =>{
    return acumulador + valor;
}, 0)

const dobro = numeros.map((valor) =>{
    return valor * 2;
}) */
/* console.log(pares);
console.log(somarPares)
console.log(total);
console.log(dobro); */

const pessoas = [
    {nome:"Luiz", idade:62},
    {nome:"Daniel", idade:74},
    {nome:"Daniela", idade:80},
    {nome:"Bruna", idade:55},
    {nome:"Jorge", idade:19}
]

const pessoaMaisVelha = pessoas.reduce((acumulador, obj) =>{
    
    if(obj.idade > acumulador.idade){
        return obj;
    }
    return acumulador
});

/* console.log(pessoaMaisVelha) */

//Filter + Map + Reduce

const numerosPares= numeros.filter((valor)=>{
    return valor % 2 === 0;
}).map((valor) =>{
    return valor * 2;
}).reduce((acc, val) =>{
    return acc + val;
})
//[ 50, 80, 2, 8, 22 ]
//[ 100, 160, 4, 16, 44 ]
//324
console.log(numerosPares);

