class DispositivoEletronico{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    mostrar(){
        return console.log(`${this.nome} ${this.preco}`)
    }

}


class TV extends DispositivoEletronico{
    constructor(nome, preco, marca){
        super(nome, preco)

        this.marca = marca;
    }    
    mostrar2(){
        return console.log(`${this.nome}, ${this.preco}, ${this.marca}`)
    }
}

const tv1 = new TV('TV1', 1000, 'LG');
const tv2 = new TV('TV2', 1200, 'Samsung');

tv1.mostrar2();
tv2.mostrar2();


