class ContaBancaria {
    constructor(nome) {
        this.nome = nome;
        this.saldo = 0;
    }

    depositar(deposito) {
        if (typeof deposito !== 'number') {
            return console.log('Você não pode depositar algo diferente de numeros')
        }
        this.saldo += deposito;
    }
    sacar(saque) {
        if (this.saldo <= 0 || (this.saldo - saque) < 0) {
            return console.log('Operação invalida | Saldo vai ficar negativo!')
        }
        if (typeof saque !== 'number') {
            return console.log('Você não pode sacar algo diferente de numeros')
        }
        this.saldo -= saque;
    }
    exibirSaldo() {
        return console.log(`Saldo atual ${this.saldo}`)
    }

}

class ContaPopança extends ContaBancaria {
    constructor(nome) {
        super(nome)
            //Saldo ja herdado foda
    }

    rendimento() {
        let rend5 = this.saldo * 0.05;
        this.saldo = this.saldo + rend5;
        return console.log(`Saldo com rendimento -> ${this.saldo}`);
    }
}

// let conta1 = new ContaBancaria('Daniel');
// conta1.exibirSaldo();
// conta1.depositar(100);
// conta1.exibirSaldo();
// conta1.sacar(50);
// conta1.exibirSaldo();

let contaP = new ContaPopança('Daniel')
contaP.exibirSaldo()
contaP.depositar(100);
contaP.rendimento();
contaP.exibirSaldo()