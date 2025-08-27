// const nome = 'Daniel';
// const sobrenome = 'Zanchetta';

// const falaNome = () =>{
//     console.log(nome, sobrenome);
// };

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquer = 'Qualquer';

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;