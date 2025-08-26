// const mod1 = require('./B/C/D/mod');
// const mult = mod1.mult;
// const Cachorro = mod1.Cachorro;


// console.log(mult(4, 2))

// const dog = new Cachorro('Gonçagay')
// dog.latir();
// // console.log();

const path = require('path');
console.log(__dirname)
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));