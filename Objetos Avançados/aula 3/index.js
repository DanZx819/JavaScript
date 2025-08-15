function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        //value: estoque, // Valor poderia ser uma função
        //writable: true, // Pode alterar
        configurable: true, // Configurável
        get: function(){
            return estoquePrivado;
        }, //Pega e mostra o valor
        set: function(valor){
            if (typeof valor !== 'number') {
                console.log('Bad value');
                return;
            }
            estoquePrivado = valor;
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 4;
console.log(p1);
console.log(p1.estoque);