//Herança com classes parei nos 4:00.

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
            console.log('Dispostivo já desligado');
            return;
        }
        this.ligado = false;
    }
}


class Smartphone extends DispositivoEletronico{
    constructor(nome,cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
};

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){

        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olha, você alterou o método ligar.')
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'S10');
// console.log(s1)

const t1 = new Tablet('iPad', true);
// console.log(t1.ligado)
t1.ligar();