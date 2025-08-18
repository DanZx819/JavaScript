const pessoas = [
    {id:3, nome: 'Luiz'},
    {id:2, nome: 'Daniel'},
    {id:1, nome: 'Gabriel'},
];

// const novasPessoas = {};

// for(const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();

for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
}
console.log(novasPessoas)

for(const [identifier, {id,nome}] of novasPessoas){
    console.log(identifier, id, nome)
}



