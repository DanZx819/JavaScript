class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const campos = this.validarCampos();

        const senhas = this.validarSenhas();

        if (campos) {
            alert('Formulario Enviado')
            this.formulario.submit();
        }
    }

    validarCampos() {
        let valido = true;


        for (let campo of this.formulario.querySelectorAll('.input')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {

                this.criaErro(campo, `Preencha este campo ${campo}`)
                valido = false;
            }
        }

        return valido;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerText = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', campo);
    }
}

const validaFormulario = new ValidaForm;