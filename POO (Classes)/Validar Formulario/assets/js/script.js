class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
    }

    camposSaoValidos(){
        let valid = true;
        
        for(let errorText of this.formulario.querySelectorAll('.error-text')){

            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco.`)
                valid = false;
            }
        }
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();