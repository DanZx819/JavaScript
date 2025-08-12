const { evaluate } = math;
function Calculadora(){

    this.display = document.querySelector('.display');

    this.capturaClicks = () =>{
        document.addEventListener('click', (event) =>{
            const el = event.target;
            if (el.classList.contains('btn-num')) {
                this.addNumDisplay(el);
            }
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            if (el.classList.contains('btn-del')) {
                this.delDisplay(el);
            }
            if (el.classList.contains('btn-eq')) {
                this.realizaConta(el);
            }
        });
    }


    this.clearDisplay = () =>{
        this.display.value = '';
    };

    this.delDisplay = () =>{
        this.display.value = this.display.value.slice(0, -1);
    }

    this.addNumDisplay = (el) =>{
        this.display.value += el.innerText; 
        this.display.focus();
    };

    this.inicia = () =>{
        this.capturaClicks();
        this.pressEnter();
    };

    this.pressEnter = () =>{
        document.addEventListener('keyup', (e) =>{
            if (e.key === 'Enter') {
                this.realizaConta();
            }
        })
    }

    this.realizaConta = () =>{
        const resultado = this.display.value;

        try{
            conta = evaluate(resultado);
            this.display.value = String(conta);
        }catch(e){
            alert('Conta inválida');
        }
        
    }
}


const calculadora = new Calculadora();

calculadora.inicia();