//Funções fabrica -> Factory Function
function criaPessoa(nome, sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto){
            return `${this.nome} está ${assunto} e tem ${this.peso}Kg`; 
        },
        peso: peso,
        altura: altura,
        //Getter -> get transforma uma função em atributo
        get imc(){
            const ind = this.peso / (this.altura ** 2);
            return ind.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Daniel', 'Zanchetta', 1.76,67);
p1.nomeCompleto = 'Daniel de Oliveira';
console.log(p1.nomeCompleto, p1.imc);//Neste caso p1 === this

const p2 = criaPessoa('Maira', 'Gravida', 1.60, 55);
console.log(p2.fala('gravidez'))//Neste caso p2 === this

