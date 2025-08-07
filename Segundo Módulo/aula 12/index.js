//Atribuição por desestruturação (Array);

// let a = 'A';
// let b = 'B';
// let c = 'C';

// [a,b,c] = [1,2,3]; //Desestruturação

// const numeros = [1, 2, 3];
// [a, b, c] = numeros;

// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// const [primeroNumero, segundoNumero, ...resto] = numeros; //Joga na variavel via desestruturação
//                                     //Pega o resto do array
// const [primeroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; //Joga na variavel via desestruturação
//                                     //Pega o resto do array

// const [um, ,tres, ,cinco] = numeros;
// console.log(primeroNumero, segundoNumero, terceiroNumero);

//                  0        1        2
//                0 1 2    0 1 2    0 1 2
const numeros = [[1,2,3], [4,5,6], [7,8,9]];

// const [,[,,seis]] = numeros; //Complexo


// console.log(numeros[1][2]);

const [lista1, lista2, lista3] = numeros; //Menos complexo

console.log(lista1[0]);