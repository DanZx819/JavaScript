

function ValidaCPF(cpfEnviado){

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function(){
    if (typeof this.cpfLimpo === 'undefined') {
        return false;
    }

    if(this.cpfLimpo.length !== 11){
        return false;
    }

    if (this.isSequencia() === true) {
        return false;
    }

    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + String(digito1) + String(digito2)

    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val)=>{
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    if (digito > 9) {
        return 0;
    }else{
        return digito;
    }
};

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('553.649.088-52');

console.log(cpf.valida())