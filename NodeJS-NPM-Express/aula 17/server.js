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

const session = require('express-session');
const MongoStore = require('connect-mongo', session);
const flash = require('connect-flash');
const csrf = require('csurf');
const path = require("path");
const helmet = require('helmet');
const routes = require("./routes");
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require("./src/middlewares/middleware");

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
  secret: 'dcvgbhjbhnujimkol',
  store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));

app.set("view engine", "ejs");


app.use(csrf());
//Nossos Próprios Middlewares
app.use(middlewareGlobal, checkCsrfError, csrfMiddleware);
app.use(routes);

app.on("pronto", () => {
  const porta = 3000;
  app.listen(porta, () => {
    console.log(`Acessar http://localhost:${porta}`);
    console.log(`Servidor executando na porta ${porta} \nCTRL + C para parar!`);
  });
});
