//Aula de return

// function soma(a, b){
//     return a + b;
// }

// function soma2(a,b){
//     console.log(a + b);
// }

// let somar2 = soma2(2, 5);

// let somar = soma(2,5)

// console.log(somar, somar2)

// function criaPessoa(nome, sobrenome){
//     return {nome: nome, sobrenome: sobrenome};
// }

// const p1 = criaPessoa('Daniel', 'Zanchetta');

// // console.log(p1.nome, p1.sobrenome)

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// // const olaMundo = falaFrase('Olá');
// // console.log(olaMundo('mundo!'))

// const fala = falaFrase('Olá');//Se torna uma função [falaResto]
// const resto = fala('mundo!');
// console.log(resto);


function criaMultplicador(multiplicador){
    //multiplicador
    function multiplicacao(n){
        return n * multiplicador;
    }
    return multiplicacao;
}

const duplica = criaMultplicador(2);
const triplica = criaMultplicador(3);
const quadriplica = criaMultplicador(4);

console.log(duplica(3));
console.log(triplica(4));
console.log(quadriplica(10));
