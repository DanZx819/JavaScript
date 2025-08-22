class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    verSalario() {
        return console.log(`Salario Funcionario R$${this.salarioBase}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salarioBase) {
        super(nome, salarioBase)
    }

    verSalario() {
        let salarioGerente = this.salarioBase + (this.salarioBase * 0.20);
        salarioGerente.toFixed(2);
        return console.log(`Salario Gerente R$${salarioGerente}`)
    }
}
class Programador extends Funcionario {
    constructor(nome, salarioBase, projetos) {
        super(nome, salarioBase)
        if (typeof projetos !== 'number') {
            throw new Error("Valor projetos precisa ser um número!");

        }
        this.projetos = projetos;
    }

    verSalario() {
        return console.log(`Salario Programador R$${this.salarioBase += this.projetos * 100}`)
    }
}
const func = new Funcionario('Daniel', 1000);

func.verSalario();

const gerent = new Gerente('Daniel', 1000);

gerent.verSalario();

const prog = new Programador('Daniel', 2000, 10);
prog.verSalario()