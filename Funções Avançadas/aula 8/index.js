//Aula de IIFE -> Immediately invoked function expression

(function (idade, peso) {
    const nome  = 'Luiz';
    
    function criaNome(nome) {
        const sobrenome = 'Zanchetta';
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Daniel'));
    }

    falaNome();

    console.log(idade, peso);


})(18, 67);

