const HomeModel = require("../models/HomeModel");
const Contato = require("../models/ContatoModel");
exports.paginaInicial = async (req, res, next) => {
  if (req.session.user) {
    try {
      const contatos = await Contato.buscaContato(req.session.user._id);

      res.render("index", {
        contatos: contatos || [], // garante sempre um array
      });
    } catch (e) {
      console.log(e);
      res.status(400).render("./error/404"); // página de erro genérica
    }
  }else{
    res.render("index", {
        contatos: {}, // garante sempre um array
      });
  }
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
