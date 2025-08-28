exports.middlewareGlobal = (req, res, next) => {
    
    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Zanchetta', 'Sobrenome italiano!')
        console.log('Passei no middleware global!!');
        console.log(`Vi que você postou ${req.body.cliente} no formulario.`)
    }
    next();
}

exports.outroMiddleware = (req, res, next) =>{
    next();
}