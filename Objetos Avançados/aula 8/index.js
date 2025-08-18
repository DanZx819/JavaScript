//Algoritmo CPF-Valida

//705.484.450-52

const cpf = '705.484.450-52';
// const cpf = '070.987.720-03';

function tratarCPF(cpf){
    let cpfTratado = cpf.replaceAll('.', '');
    
    cpfTratado = cpfTratado.replaceAll('-', '');
    
    
    const cpfArrayTratado = cpfTratado.split('');
     
    cpfArrayTratado.splice(9, 2)

    const fnDigito = cpfTratado.split('');
    
    
    fnDigito.splice(0, 9);


    const cpfCompleto = cpfTratado.split('');
    
    return {cpfTratado: cpfArrayTratado, fnDigito: fnDigito, cpfCompleto: cpfCompleto};

}
function multCpf1(cpfTratado){
    let resultado = 0
    let indice = 0
    for(let mult = 10; mult > 2; mult--){
        resultado += mult * cpfTratado[indice];
        
        indice ++;
    }
    return {resultado: resultado};
}
function multCpf2(cpfTratado, fnDigito){
    const cpfCom1 = [...cpfTratado];
    cpfCom1.push(fnDigito[0])
   
    
    let resultado = 0
    let indice = 0
    for(let mult = 11; mult > 1; mult--){
        resultado += mult * cpfCom1[indice];
        
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

function segundoDigito(num){
    let res2 = 11 - (num % 11);

    if (res2 > 9) {
        res2 = 0;
    }

    return {resultado: res2};
}


function ValidaCpf(cpf,dgt1, dgt2){
    const cpfArray = [...cpf];
    
    if(cpfArray.length !== 11){
       return false; 
    }

    cpfArray.splice(0,9);
    
    const digito1 = dgt1.resultado
    
    const digito2 = dgt2.resultado
    

    
    if (digito1 === Number(cpfArray[0]) && digito2 === Number(cpfArray[1])) {
        console.log('CPF verdadeiro');
        return true
    }else{
        console.log('CPF Falso')
        return false
    }
    
}
const cpfT = tratarCPF(cpf);

const n = multCpf1(cpfT.cpfTratado);
const n2 = multCpf2(cpfT.cpfTratado, cpfT.fnDigito)

const primeroDgt = primeiroDigito(n.resultado);
const segundoDgt = segundoDigito(n2.resultado)

const cpfValidado = ValidaCpf(cpfT.cpfCompleto, primeroDgt, segundoDgt)

console.log(`${cpfValidado}`);

