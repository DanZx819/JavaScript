function criaCalculadora(){
    
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia: function(){
            this.clickBotoes();
            this.pressionaEnter();
            
        },
        pressionaEnter: function pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clickBotoes: function(){
            document.addEventListener('click', function(e){

                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            }.bind(this));
        },

        btnParaDisplay: function btnParaDisplay(valor){
            this.display.value += valor;
        },
        clearDisplay: function clearDisplay(){
            this.display.value = '';
        },
        apagaUm: function apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta: function realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta inválida')
                return;
            }
        },


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();