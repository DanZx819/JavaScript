//Algoritmo CPF-Valida

//705.484.450-52

const cpf = '705.484.450-52';
// const cpf = '070.987.720-03';

function tratarCPF(cpf){
    let cpfTratado = cpf.replaceAll('.', '');
    
    cpfTratado = cpfTratado.replaceAll('-', '');
    
    
    const cpfArrayTratado = cpfTratado.split('');
     
    cpfArrayTratado.splice(9, 2)

   

    const fnDigito = [];
    
    fnDigito.splice(fnDigito.length, 1, cpfTratado.slice(-2, cpfTratado.length));

    return {cpfTratado: cpfArrayTratado, fnDigito: fnDigito};

}
function multCpf1(cpfTratado, fnDigito){
    let resultado = 0
    let indice = 0
    for(let mult = 10; mult > 2; mult--){
        resultado += mult * cpfTratado[indice];
        
        indice ++;
    }
    return {resultado: resultado};
}

function primeiroDigito(num){
    
    let res = 11 - (num % 11);
    
    if (res > 9) {
        res = 0;
    }
    return {resultado: res}
}



function multCpf2(cpfTratado, fnDigito){
    let resultado = 0
    let indice = 0
    for(let mult = 11; mult > 2; mult--){
        resultado += mult * cpfTratado[indice];
        console.log(resultado)
        indice ++;
    }
    return {resultado: resultado};
}








const cpfT = tratarCPF(cpf);

// console.log(cpfT.cpfTratado, cpfT.fnDigito);



const n = multCpf1(cpfT.cpfTratado);
const n2 = multCpf2(cpfT.cpfTratado)

const primeroDgt = primeiroDigito(n.resultado);
console.log(`${n.resultado}, ${n2.resultado}`);

