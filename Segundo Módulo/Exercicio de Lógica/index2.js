//Função pra definir se imagem é paisagem ou não


function ePaisagem(altura, largura){

    if(isNaN(altura) || isNaN(largura)){
        console.log('Digite um número!');
    }

    return largura > altura ? console.log('É paisagem') : console.log('Não é Paisagem');
    
}

ePaisagem(3,4)