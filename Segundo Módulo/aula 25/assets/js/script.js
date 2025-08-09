const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

let segundos = 0;

function horaZerada(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}
let timer = null;

iniciar.addEventListener('click', function(event){
    if (timer) return;
    relogio.style.color = 'black';
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = `${horaZerada(segundos)}`
    }, 1000);
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.style.color = 'red';
    timer = null;
});

zerar.addEventListener('click', function(event){
    segundos = 0;
    clearInterval(timer);
    relogio.innerHTML = `${horaZerada(segundos)}`
    timer = null;
});