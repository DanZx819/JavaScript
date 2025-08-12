function criaCalculadora(){
    
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),





        inicia: function(){
            this.clickBotoes();
            
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
                    this.realizaConta
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
        }


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();