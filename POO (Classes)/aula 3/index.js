//Herança com classes

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado === true) {

            console.log('Dispostivo já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if (this.ligado === false) {
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
console.log(d1);