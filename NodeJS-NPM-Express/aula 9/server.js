//CRUD -> CREATE, READ, UPDATE, DELETE
//        POST    GET   PUT     DELETE

//http://meussite.com/ <- GET -> Entregue a página /
//http://meussite.com/sobre <- GET -> Entregue a página /sobre
//http://meussite.com/contato <- GET -> Entregue a página /contato

// http://facebook.com/profile/{1324} -> Id enviado por URL
// http://profiles/profile/123?campanha=googleads &
// nome_campanha=Campanha

const express = require('express');
const app = express();

const routes = require('./routes')

app.use(express.urlencoded({extended: true}))

app.use(routes);

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000 \nCTRL + C para parar!')
});