const nome = prompt('Digite o seu nome completo: ');

let nomeSemEspaco = nome.replace(/ /g, '');

let segundaLetraNome = nome[1];

let primeiroIndiceLetraA = nome.search(/a/);

let ultimoIndiceLetraA = nome.lastIndexOf('a');

let tresUltimasLetras = nome.slice(-3);

let palavrasDoNome = nome.split(' ');

let nomeMaiusculo = nome.toUpperCase();

let nomeMinusculo = nome.toLowerCase();

document.body.innerHTML = `O seu nome é: ${nome} <br/>`;
document.body.innerHTML += `O seu nome tem  ${nomeSemEspaco.length} letras. <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetraNome} <br/>`;
document.body.innerHTML += `Primeiro indice da letra a: ${primeiroIndiceLetraA} <br/>`;
document.body.innerHTML += `Ultimo indice da letra a: ${ultimoIndiceLetraA} <br/>`;
document.body.innerHTML += `Três ultimas letras do seu nome: ${tresUltimasLetras} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${palavrasDoNome} <br/>`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${nomeMaiusculo} <br/>`;
document.body.innerHTML += `Seu nome com letras minusculas: ${nomeMinusculo} <br/>`;





