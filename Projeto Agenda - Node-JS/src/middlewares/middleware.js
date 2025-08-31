exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
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