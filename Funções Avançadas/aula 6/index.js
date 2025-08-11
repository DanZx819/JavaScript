// Aula de Closures -> Habilidade da função dentro da função de acessar a sua função pai

function retornaFuncao(nome){
    
    return function(){// Pode acessar a variavel setada dentro da outra função
        return nome;
    }
}

const funcao = retornaFuncao('João');
const funcao2 = retornaFuncao('Martins')
console.log(funcao(), funcao2())