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



app.get('/testes/:idUsuario?/:parametro?', (req, res) =>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.query)
    // res.send(`<p> ${req.params.idUsuario} ${req.params.parametro} <p/>`)
});

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

app.get('/', (req, res) => {
    res.send(`
        <form action = '/' method="POST">
        Nome do cliente: <input type="text" name="name">
        <button>Enviar</button>
        <form/>
        `);
});

app.post('/', (req, res) =>{
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.name}`);
})

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato!')
})

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000 \nCTRL + C para parar!')
});