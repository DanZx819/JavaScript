//Aula de escopo léxico

const nome = 'Luiz';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Otavio'
    falaNome();
}

usaFalaNome()