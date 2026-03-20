//Filter -> Sempre retorna um array


const numeros = [5, 50, 80, 1,2,3,5,8,7,11,15,22,27];


const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10;
});

//console.log(numerosFiltrados);



/* let arrFiltrado = []; */
/* for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 10){
        arrFiltrado.push(numeros[i])
    }
}

console.log(arrFiltrado) */

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos 
//Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome:"Luiz", idade:62},
    {nome:"Daniel", idade:24},
    {nome:"Daniela", idade:30},
    {nome:"Bruna", idade:55},
    {nome:"Jorge", idade:19}
]

const pessoasComNomeGrande = pessoas.filter((obj) =>{
    return obj.nome.length >= 5;
});

//console.log(pessoasComNomeGrande);

const pessoasVelhas = pessoas.filter((obj) =>{
    return obj.idade > 50;
});

//console.log(pessoasVelhas)

const pessoasA = pessoas.filter((obj) =>{
    return obj.nome.toLocaleLowerCase().endsWith('a');
})

console.log(pessoasA);