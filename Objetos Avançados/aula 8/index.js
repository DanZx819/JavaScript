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

const cpfT = tratarCPF(cpf);

console.log(cpfT.cpfTratado, cpfT.fnDigito);

function multCpf(cpfTratado, fnDigito){
    let resultado = 0
    let indice = 0
    for(let mult = 10; mult > 2; mult--){
        resultado += mult * cpfTratado[indice];
        console.log(cpfTratado[indice] + '*' + mult)
        console.log(resultado)
        
        indice ++;
    }
    return {resultado: resultado};
}

const n = multCpf(cpfT.cpfTratado);

const valCpf = validaCPF(n);
console.log(n.resultado)
