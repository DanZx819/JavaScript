exports.mult = function mult(x,y){
    return x * y;
}

exports.Cachorro = class Cachorro{
    constructor(nome){
        this.nome = nome;
    }

    latir(){
        return console.log(`${this.nome} está falando au au`);
    }
}

