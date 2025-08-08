// For in -> lê os índices ou chaves do objeto
const frutas = ['Pera', 'Mação', 'Uva', 'Morango'];
const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Zanchetta',
    idade: 18
}

for(let i in pessoa){
    console.log(i ,pessoa[i]);
}

// for (let i in frutas){
//     console.log(frutas[i]);
// }

// for (let i = 0; i < frutas.length; i++) {  
//     console.log(frutas[i]);
// }