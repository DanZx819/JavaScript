const HomeModel = require("../models/HomeModel");
const Contato = require('../models/ContatoModel')
exports.paginaInicial = async (req, res, next) => {
  try {
    const contatos = await Contato.buscaContato(req.session.user._id);
    res.render("index", {
    contatos: contatos
  });
  } catch (e) {
    console.log(e);
    res.render('./error/404');
  }
  
  return;
};



exports.trataPost = (req, res) => {
  res.send(req.body);
};
