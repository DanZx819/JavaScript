function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') {
            reject('Bad Value');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo)
    });
}

const promisses = [ esperaAi('Promise 1', rand(1,5)) ,esperaAi('Promise 2', rand(1,4)) ,esperaAi('Promise 3', rand(1,6))];

// Promise.all(promisses).then(function(valor){
//     console.log(valor);
// }).catch(function(e){
//     console.log(e);
// }) Retorna Todos

// Promise.race(promisses).then(function(valor){
//     console.log(valor);
// }).catch(function(e){
//     console.log(e);
// }) //Retorna a primeira que resolver

function baixaPagina(){
    let emCache = true;
    let x = rand(1,2);
    console.log(x)
    if (x > 1000 ) {
        emCache = true;
    }else{
        emCache = false
    }

    if(emCache){
        return Promise.resolve('Página em cache!');
    }else{
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina().then(dadosPagina =>{
    console.log(dadosPagina);
}).catch(e => console.log(e));