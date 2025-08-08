// const nome = 'Luiz';
// let i = 0;

// while(i < nome.length){
//     console.log(nome[i]);
//     i++
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 50);
let cont = 0;
// while(rand !== 10){
//     rand = random(1,50);
//     console.log(`${rand}`);
//     if(rand !== 10){
//         cont++
//     }else{
//         console.log(`foi ${cont} vezes até chegar no 10`)
//     }

// }

do {
    rand = random(1, 100);
    console.log(`${rand}`);
    if (rand !== 10) {
        cont++
    } else {
        console.log(`foi ${cont} vezes até chegar no 10`)
    }
} while (rand !== 10);