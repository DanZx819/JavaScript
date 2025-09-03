const Contato = require("../models/ContatoModel");

exports.index = function (req, res) {
  res.render("contato", {
    contato: {},
  });
  return;
};

exports.register = async function (req, res) {
  try {
    const contato = new Contato({ ...req.body, user: req.session.user._id });
    await contato.register();
    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect("/contato"));
      return;
    }

    req.flash("success", "Contato Registrado com sucesso");
    req.session.save(() => res.redirect(`/`));
    return;
  } catch (e) {
    console.log(e);
    return res.render("./error/404");
  }
};

exports.editIndex = async (req, res) => {
  if (!req.params.id) {
    return res.render("./error/404");
  }
  try {
    const user = await Contato.buscaPorId(req.params.id);
    if (!user) {
      return res.render("./error/404");
    }
    res.render("contato", {
      contato: user,
    });
  } catch (e) {
    console.log(e);
    res.render("./error/404");
  }
};

exports.edit = async function (req, res) {
  if (!req.params.id) {
    return res.render("./error/404");
  }

  try {
    const contato = new Contato({
      ...req.body,
      user: req.session.user._id,
    });
    await contato.edit(req.params.id);

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      return res.render("contato", {
        contato: req.body, // mantém os dados que o usuário digitou
        errors: contato.errors,
        csrfToken: req.csrfToken(),
      });
    }

    req.flash("success", "Contato Editado com sucesso");
    req.session.save(() => res.redirect(`/`));
    return;
  } catch (e) {
    console.log(e);
  }
};



exports.delete = async (req, res) => {
  if (!req.params.id) return res.render('./error/404')

  try {
    const contato = await Contato.delete(req.params.id);

    if (!contato) {
      return res.render("./error/404");
    }

    req.flash("success", "Contato Apagado com sucesso");
    req.session.save(() => res.redirect(`/`));
    return;
  } catch (e) {
    console.log(e)
    req.flash("errors", "Falha");
  }
};
