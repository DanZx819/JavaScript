const express = require('express');
const app = express();

//CRUD -> CREATE, READ, UPDATE, DELETE
//        POST    GET   PUT     DELETE

//http://meussite.com/ <- GET -> Entregue a página /
//http://meussite.com/sobre <- GET -> Entregue a página /sobre
//http://meussite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
        <form action = '/' method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        <form/>
        `);
});

app.post('/', (req, res) =>{
    res.send('Recebi o formulário!');
})

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato!')
})

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000 \nCTRL + C para parar!')
});