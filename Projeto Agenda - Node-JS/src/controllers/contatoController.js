const Contato = require("../models/ContatoModel");

exports.index = function (req, res) {
  res.render("contato");
};

exports.register = async function (req, res) {
  try {
    const contato = new Contato(req.body);
    await contato.register();
    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect("/contato"));
      return;
    }

    req.flash("success", "Contato Registrado com sucesso");
    req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
    return;
  } catch (e) {
    console.log(e);
    return res.render('./error/404')
  }
};

exports.editIndex = (req, res) =>{
    if (!req.params.id) {
        return res.render('./error/404')
    }

    const contato = new Contato(req.body);
    const user = contato.buscaPorId(req.params.id);

    if (!user) {
        return res.render('./error/404');
    }
    res.render('contato');
}
