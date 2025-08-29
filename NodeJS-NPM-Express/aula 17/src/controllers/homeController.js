// exports.paginaInicial = (req, res,  next) => {
//   console.log("Respondendo Cliente!")
//   res.render('index');
//   console.log(`Olha o que tem na req.session.nome ${req.session.nome}`)
//   next()
// };

const HomeModel = require('../models/HomeModel');


// HomeModel.create({
//   titulo: 'Um titulo de testes',
//   descricao: 'Uma descricao de testes'
// }).then(dados => {
//   console.log(dados);
// }).catch((e) => console.log(e));

// HomeModel.find({
//   titulo: 'Um titulo de testes',
//   descricao: 'Uma descricao de testes'
// }).then(dados => {
//   console.log(dados);
// }).catch((e) => console.log(e));

exports.paginaInicial = (req, res,  next) => {
 
  res.render('index', {
    titulo: 'Este será o titulo da página',
    numeros: [0,1,2,3,4,5,6,7,8,9,10]
  });
};
exports.trataPost = (req, res) =>{
    res.send(req.body);
}
