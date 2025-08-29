require('dotenv').config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");



mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('Base de Dados Conectada!');
    app.emit("pronto");
}).catch((e) =>{
    console.log(e)
});

const path = require("path");
const routes = require("./routes");
const { middlewareGlobal } = require("./src/middlewares/middleware");
const e = require("express");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));

app.set("view engine", "ejs");

//Nossos Próprios Middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on("pronto", () => {
  const porta = 3000;
  app.listen(porta, () => {
    console.log(`Acessar http://localhost:${porta}`);
    console.log(`Servidor executando na porta ${porta} \nCTRL + C para parar!`);
  });
});
