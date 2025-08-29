const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// function meuMiddleware(req, res, next){
//     req.session = {nome: 'Daniel', sobrenome: 'Zanchetta'};
//     console.log("Passei no seu middleware.");
    
//     next();
// }

//Rotas da Home

// route.get('/', meuMiddleware, homeController.paginaInicial,  function(req, res, next){
//     console.log("Ainda estou aqui!")
//     console.log(`Ultimo middleware: Olha o que tem na req.session.nome ${req.session.nome}`)
// });

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas Para Contato

route.get('/contato', contatoController.paginaInicial)


module.exports = route;