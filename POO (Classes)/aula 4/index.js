class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //Método de instância
    aumentarVolume(){

        if (this.volume += 10 > 100) {
            return console.log('Volume Maximo');
        }
        this.volume += 10;
    }
    diminuirVolume(){
        if (this.volume -= 10 < 0) {
            return console.log('Volume Minimo');
        }
        this.volume -= 10;
    }
    //Método estático
    static soma(x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume()

controle1.diminuirVolume()

console.log(controle1)


console.log(ControleRemoto.soma(2,4))