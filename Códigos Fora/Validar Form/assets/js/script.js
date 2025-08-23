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

        if (campos && senhas) {
            alert('Formulario Enviado')
            this.formulario.submit();
        }
    }

    validarCampos() {
        let valido = true;
        for(let error of this.formulario.querySelectorAll('.error-text')){
            error.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.input')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Preencha este campo ${label}`)
                valido = false;
            }
            if (campo.classList.contains('nome')) {
                if (!this.validarNome()) {
                    valido = false;
                }
            }
            
            
        }

        




        return valido;
    }

    validarNome(){
        let valido = true;
        const nome = this.formulario.querySelector('.nome');
        const sobrenome = this.formulario.querySelector('.sobrenome');

        if (nome.value.length < 3) {
            this.criaErro(nome, 'O seu nome precisa ter entre pelo menos caracteres');
            valido = false;
        }
        if (sobrenome.value.length < 3) {
            this.criaErro(sobrenome, 'O seu sobrenome precisa ter entre pelo menos caracteres');
            valido = false;
        }
        
        if (!nome.value.match(/^[a-zA-Z]+$/g) ) {
            this.criaErro(nome, 'O seu nome deve conter apenas letras')
            valido = false;
        }

        if ( !sobrenome.value.trim().match(/^[a-zA-Z]+$/g)) {
            this.criaErro(sobrenome, 'O seu sobrenome deve conter apenas letras')
            valido = false;
        }

        return valido;
    }

    validarSenhas(){
        let valido = true;
        const senha = this.formulario.querySelector('.senha');
        const senha2 = this.formulario.querySelector('.rep_senha');
        

        if (senha.value.length < 6) {
            this.criaErro(senha, 'Digite uma senha maior que 6 caracteres!')
            valido = false;
        }

        if (senha.value !== senha2.value) {
            this.criaErro(senha, 'As senhas não conferem!')
            this.criaErro(senha2, 'As senhas não conferem!')
            valido = false;
        }

        return valido;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerText = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validaFormulario = new ValidaForm();


