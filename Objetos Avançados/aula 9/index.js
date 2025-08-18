//Polimorfismo

//Super Class -> Em POO
function Conta(agencia, conta, saldo){
    this.agencia = agencia;    
    this.conta = conta;
    this.saldo = saldo;
}


Conta.prototype.sacar = function(valor){
    if (this.saldo < valor) {
        console.log(`Saldo Insuficiente: R$${this.saldo}` )
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
}


Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta}` + ` | Saldo: R$${this.saldo.toFixed(2)}`)
}

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta,saldo);
    this.limite = limite;
}

CC.prototype = new Object(Conta.prototype)
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: R$${this.saldo}` )
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
}

function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta,saldo);
}

CP.prototype = new Object(Conta.prototype)
CP.prototype.constructor = CP;

CP.prototype.sacar = function(valor){
    if (valor > this.saldo) {
        console.log(`Saldo Insuficiente: R$${this.saldo}` )
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
}

// const contaCorrente = new CC(11,22, 0, 100);

// contaCorrente.depositar(10);
// contaCorrente.sacar(110);


const cp = new CP(11,22,0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(10)