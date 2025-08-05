/**
 * && -> false && true -> false
 * || -> ture || false -> vai retornar o primeiro valor verdadeiro
 * FALSY
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN 
 */

// console.log('Daniel' && 0 && 'Maria');

// console.log('Daniel' && '' && 'Zanchetta');

// function falaOi (){
//     return 'Oi';
// }

// const vaiExecutar = false;

// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz' || true)

// const corUsuario = 'preto';
// const corPadrao = corUsuario || 'red';
// console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = 'false';
const e = undefined;

console.log(a || b || c || d || e );
