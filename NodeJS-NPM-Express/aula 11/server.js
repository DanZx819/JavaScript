
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.use(routes);

const porta = 3000
app.listen(porta, ()=>{
    console.log(`Acessar http://localhost:${porta}`)
    console.log(`Servidor executando na porta ${porta} \nCTRL + C para parar!`)
});