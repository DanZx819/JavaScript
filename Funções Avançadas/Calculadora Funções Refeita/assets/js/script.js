const { evaluate } = math;

function Calculadora() {

    return {
        display: document.querySelector('.display'),

        inicia: function iniciaCalculadora() {
            this.clickBotao();
            this.pressEnter();
        },

        pressEnter(){
            this.display.addEventListener('keyup', (e)=>{
                if (e.keycode === 13) {
                    this.realizaConta();
                }
            })
        },
        clickBotao() {
            document.addEventListener('click', function (e) {

                let el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.displayNum(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.displayClear();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            }.bind(this));
        },

        displayNum(valor) {
            this.display.value += valor;
        },
        displayClear() {
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            try {
                const resultado = evaluate(this.display.value);
                this.display.value = String(resultado);
            } catch (e) {
                alert('Conta invalida');
                return;
            }
        },
    }



}


const calculadora = Calculadora();
calculadora.inicia();