const validator = require("validator");

const mongoose = require("mongoose");

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String },
  email: { type: String },
  telefone: { type: String },
  criadoEm: {type: Date, default: Date.now},
});

const ContatoModel = mongoose.model("Contato", ContatoSchema);

class Contato {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
  }

  async register() {
    this.valida();

    if (this.errors.length > 0) {
        return;
    }

    this.contato = await ContatoModel.create(this.body);
  }

  valida() {
    this.cleanUp();
    //Validação
    //O email precisa ser válido
    if (this.body.email && !validator.isEmail(this.body.email)) {
      this.errors.push("E-mail inválido");
    }
    if (!this.body.nome) {
        this.errors.push('Nome é um campo obrigatório')
    }

    if (!this.body.email && !this.body.telefone) {
        this.errors.push('Pelo menos um contato precisa ser enviado');
    }
  }

  static async buscaPorId(id){
    const user = await ContatoModel.findById(id);
    return user;
  }

  cleanUp() {
    for (let key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      email: this.body.email,
      telefone: this.body.telefone,
    };
  }
}

module.exports = Contato;
