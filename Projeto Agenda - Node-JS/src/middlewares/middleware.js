exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
}

exports.outroMiddleware = (req, res, next) =>{
    next();
}

exports.checkCsrfError = function(err, req, res, next){
    if (err) {
        return res.render('error/404')
    }
    next(err)
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}

exports.loginRequired = (req,res,next) =>{
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login!');
        req.session.save(() => res.redirect('/')) ;
        return;
    }

    next();
}