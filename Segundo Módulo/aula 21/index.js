const numeros = [1,2,3,4,5,6,7,8,9];

for(let numero of numeros){
    // if (numero === 2 || numero === 5) {
    //     console.log(`Pulei o ${numero}`)
    //     continue;
    // }
    if(numero === 7){
        console.log(numero);
        break;
    }
    // console.log(numero);
}