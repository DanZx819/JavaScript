// Tratar erros

//Tente executar isso 
// try{
//     console.log(naoExisto);
// }catch(e){ //Se der erro execute isso
//     console.log('Erro - Variavel não Existente');
//     console.log(e);
// }

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('x e y precisam ser números.')
    }

    return x + y;
}
try{
    console.log(soma(2, 3))
    console.log(soma('2', 3))
}catch(e){
    console.log(e);
    console.log('Alguma coisa mais amigavel pro usuário')
}
