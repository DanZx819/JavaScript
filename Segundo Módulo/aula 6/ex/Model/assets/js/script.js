function meuEscopo() {
    const form = document.querySelector('.form');
    const divResultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {

        evento.preventDefault();

        const peso = Number(document.querySelector('.peso').value);
        const altura = Number(document.querySelector('.altura').value);
        let resultado = '';
        if (!peso || isNaN(peso)) {
            resultado = 'Digite um peso válido';
            divResultado.style.color = 'red';
            divResultado.innerHTML = `<p>${resultado}</p>`;
        } else if (!altura || isNaN(altura)) {
            resultado = 'Digite uma altura válida';
            divResultado.style.color = 'red';
            divResultado.innerHTML = `<p>${resultado}</p>`;
        } else {
            let imc = peso / (altura * altura);
            let situacao = '';

            if (imc < 18.5) {
                situacao = 'Abaixo do peso';
            } else if (imc >= 18.5 && imc <= 24.9) {
                situacao = 'Peso Normal';
            } else if (imc >= 25 && imc <= 29.9) {
                situacao = 'Sobre Peso';
            } else if (imc >= 30 && imc <= 34.9) {
                situacao = 'Obesidade Grau 1';
            } else if (imc >= 35 && imc <= 39.9) {
                situacao = 'Obesidade Grau 2';
            } else {
                situacao = 'Obesidade Grau 3';
            }
            divResultado.style.color = 'green';
            resultado = `A situação do seu IMC é ${situacao} com o número de ${imc.toFixed(2)}`;

            divResultado.innerHTML = `<p>${resultado}</p>`;
        }
        

    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();