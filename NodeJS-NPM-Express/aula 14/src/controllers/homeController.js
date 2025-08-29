// exports.paginaInicial = (req, res,  next) => {
//   console.log("Respondendo Cliente!")
//   res.render('index');
//   console.log(`Olha o que tem na req.session.nome ${req.session.nome}`)
//   next()
// };
exports.paginaInicial = (req, res,  next) => {
  res.render('index');
};
exports.trataPost = (req, res) =>{
    res.send(req.body);
}
