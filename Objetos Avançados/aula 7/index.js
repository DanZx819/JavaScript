// Herança -> Prototypes

//Produto -> Aumento, desconto
//Camiseta = cor, caneca = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(valor){
    this.preco += valor;
};
Produto.prototype.desconto = function(valor){
    this.preco -= valor;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};
// Camiseta.prototype.constructor = Camiseta
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome,preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,

        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== "number") {
                return;
            }
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.alterarEstoque = function(mais = 0, menos = 0){
    this.estoque += mais;
    this.estoque -= menos;
}

const produto = new Produto('Gen', 10);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Xicará', 20, 'Porcelana');
const caneca2 = new Caneca('Xicará 2', 25, 'Plastico');

caneca.estoque = 50;
caneca2.estoque = 45;

caneca.alterarEstoque(0, 2);
caneca2.alterarEstoque(5);


caneca.aumento(10);
camiseta.aumento(10);
console.log(camiseta);
console.log(produto);
console.log(caneca.estoque)
console.log(caneca2.estoque)