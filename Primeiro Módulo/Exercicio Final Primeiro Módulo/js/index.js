function meuEscopo(){
    const form = document.querySelector('.form'); //Seleciona o Fomulario
    const resultado = document.querySelector('.resultado'); //Seleciona a div resultado

    const pessoas = [];//Array de pessoas
    // form.onsubmit = function (evento){
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado!');
    // };
    function recebeEventoForm(evento){
        evento.preventDefault();//Não da F5 no navegador ao enviar o formulario
        const nome = form.querySelector('.nome');//Pega o nome pela classe eviada
        const sobrenome = form.querySelector('.sobrenome');//Pega o sobrenome pela classe eviada
        const peso = form.querySelector('.peso');//Pega o peso pela classe eviada
        const altura = form.querySelector('.altura');//Pega a altura pela classe eviada

        const objeto = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }//Objeto com os valores enviados

        pessoas.push(objeto);//Coloca os dados dos valores no array pessoas

        console.log(pessoas);//Coloca no console o array

        resultado.innerHTML += `<p> ${objeto.nome} ${objeto.sobrenome} tem ${objeto.peso} Kg e ${objeto.altura} de altura!</p>`; // Imprime na tela o objeto e seus valores
    }

    form.addEventListener('submit', recebeEventoForm);//A função recebeEventoForm vai ser chamada ao enviar o form.
};

meuEscopo();