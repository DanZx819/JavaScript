//Parametros - Parei em 3:49

// function funcao() {
//     let total = 0;
//     for (let argumento of arguments){
//         total += argumento;
//     }

//     console.log(total)
// }

// funcao(1, 2);

// function funcao(a,b,c,d,e,f){
//     console.log(a,b,c,d,e,f);
// }

// funcao(1,2,3);

// function funcao([nome, sobrenome, idade]){
//     console.log(nome, sobrenome, idade);
// }

// funcao(['Daniel', 'Zanchetta', 18]);

// function funcao2({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// }
// // funcao(2, undefined, 20);

// let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 18};

// funcao2(obj);

const conta = function (operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}

conta('+', 0, 20,30,40,50);