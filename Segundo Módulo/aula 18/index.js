// For of -> Retorna o valor direto e não o índice

// const nome = 'Daniel';

// const nomes = ['Daniel', 'Sofia', 'Martins'];

// for (let valor of nomes){
//      console.log(valor);
// }

const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Zanchetta'
}

for (let k in pessoa){
    console.log(k, pessoa[k]);
}

//For clássico -> Geralmente com iteráveis (arrayy ou strings)
//For in -> Retorna o índice ou chave (string, array ou objetos)
//For of -> Retorna o valor em si (iteráveis (Arrayys ou Strings)) 

// for(let i in nome){
//     console.log(nome[i]);
// }


// for(let i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }

// nomes.forEach(function(el, i, array){
//     console.log(el, i, array);
// });