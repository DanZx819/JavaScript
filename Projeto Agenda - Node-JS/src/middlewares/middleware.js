exports.middlewareGlobal = (req, res, next) => {
    res.locals.varLocal = 'Este é o valor da variavel local.';
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