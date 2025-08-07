function meuEscopo(){
    const data = new Date();
    function getDiaDaSemana(data) {

        const diaSemana = data.getDay();
        return diaSemana;
    }
    function getDiaSemanaTexto(diaDaSemana){
        let diaSemanaTextoR;

        switch(diaDaSemana){
            case 0:
                diaSemanaTextoR = 'Domingo';
                break
            case 1:
                diaSemanaTextoR = 'Segunda-Feira';
                break
            case 2:
                diaSemanaTextoR = 'Terça-Feira';
                break
            case 3:
                diaSemanaTextoR = 'Quarta-Feira';
                break
            case 4:
                diaSemanaTextoR = 'Quinta-Feira';
                break
            case 5:
                diaSemanaTextoR = 'Sexta-Feira';
                break
            case 6:
                diaSemanaTextoR = 'Sábado';
                break
            default:
                diaSemanaTextoR = '';
        }

        return diaSemanaTextoR;
    }
    function getDiaMes(data){

        const diaMes = data.getDate();
        return diaMes;
    }
    function getMes(data){

        const Mes = data.getMonth();
        return Mes;
    }
    function getMesTexto(Mes){
        let MesTexto;
        switch (Mes) {
            case 0:
                MesTexto = 'Janeiro'
                break;
            case 1:
                MesTexto = 'Fevereiro'
                break;
            case 2:
                MesTexto = 'Março'
                break;
            case 3:
                MesTexto = 'Abril'
                break;
            case 4:
                MesTexto = 'Maio'
                break;
            case 5:
                MesTexto = 'Junho'
                break;
            case 6:
                MesTexto = 'Julho'
                break;
            case 7:
                MesTexto = 'Agosto'
                break;
            case 8:
                MesTexto = 'Outubro'
                break;
            case 9:
                MesTexto = 'Setembro'
                break;
            case 10:
                MesTexto = 'Novembro'
                break;
            case 11:
                MesTexto = 'Dezembro'
                break;

            default:
                break;
        }

        return MesTexto;
    }

    function getAno(data){

        const ano = data.getFullYear();
        return ano;
    }
    function getHora(data){
        const hora = data.getHours();
        return hora;
    }
    function getMin(data){
        const minutos = data.getMinutes();
        return minutos;
    }
    function formataHora(Hora, Min){
        let Formatada;
        if (Hora < 10 && Min < 10) {
            Formatada = `0${Hora}:0${Min}`
        }else if(Hora < 10){
            Formatada = `0${Hora}:${Min}`;
        }else if(Min < 10){
            Formatada = `${Hora}:0${Min}`;
        }

        return Formatada;
    }
    let diaDaSemana = getDiaDaSemana(data);
    let diaSemanaTexto = getDiaSemanaTexto(diaDaSemana);
    let diaMes = getDiaMes(data);
    let Mes = getMes(data);
    let MesTexto = getMesTexto(Mes);
    let Ano = getAno(data);
    
    let horaFormatada = formataHora(getHora(data), getMin(data));


    
    const h1 = document.querySelector('#hora');

    h1.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${MesTexto} de ${Ano} ás ${horaFormatada}`




}

meuEscopo();