// try{
//     //É executada quando não há erros
//     // console.log(a)
//     console.log('Abri o arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try{
//         console.log(a)
//     }catch(e){
//         console.log('Erro')
//     }finally{
//         console.log('Eu sempre sou executado');
//     }

// }catch(e){
//     //É executada quando há erros
//     console.log('Tratando o erro');
// }finally{
//     //É executado sempre
//     console.log('Finally: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    
}finally{
    console.log('Tenha um bom dia');
}
