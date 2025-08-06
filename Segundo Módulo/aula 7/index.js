//Operação ternaria -> ? :
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 999;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário normal';


const corUsuario = null;
const corPadrao = corUsuario || 'Preto';


console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP')
// }else{
//     console.log('Usuario normal');
// }