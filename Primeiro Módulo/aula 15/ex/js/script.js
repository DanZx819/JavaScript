let num = prompt('Digite um numero: ');
num = Number(num);
let raiz = num ** 0.5;

let int = Number.isInteger(num);

let nan = Number.isNaN(num);

let arredondarBaixo = Math.floor(num);

let arredondarCima = Math.ceil(num);

let comDuasCasas = num.toFixed(2);

document.body.innerHTML = `<h1>Seu número é ${num}</h1>`;
document.body.innerHTML += `Raiz quadrada: ${raiz} <br/>`;
document.body.innerHTML += `${num} é inteiro: ${int} <br/>`;
document.body.innerHTML += `É NaN: ${nan} <br/>`;
document.body.innerHTML += `Arredondando para baixo: ${arredondarBaixo} <br/>`;
document.body.innerHTML += `Arredondando para cima: ${arredondarCima} <br/>`;
document.body.innerHTML += `Com duas casa decimais: ${comDuasCasas} <br/>`;
