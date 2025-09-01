const Login = require("../models/LoginModel");

exports.index = (req, res, next) => {
  if(req.session.user){
    return res.render("logado");
  }
  return res.render("login");
};

exports.register = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.register();
    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        return res.redirect("/login");
      });
      return;
    }
    req.flash("success", "Seu usuario foi criado com sucesso!");
    req.session.save(function () {
      return res.redirect("/login");
    });
  } catch (e) {
    console.log(e);
    return res.render("./error/404");
  }
};

exports.login = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.login();
    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        return res.redirect("/login");
      });
      return;
    }
    req.flash("success", "Você entrou no sistema.");
    req.session.user = login.user;
    req.session.save(function () {
      return res.redirect("/login");
    });
  } catch (e) {
    console.log(e);
    return res.render("./error/404");
  }
};

exports.logout = function(req, res){
  req.flash("errors", "Você foi deslogado!");
  req.session.destroy();
  
  res.redirect('/');
}