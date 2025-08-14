//Filter + Map + Reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter((valor) => {
    if (valor % 2 === 0) {
        return valor;
    }
}).map((valor) => {
    return valor * 2;
}).reduce((acumulador, valor) => {

    return acumulador + valor;

});

console.log(numerosPares)


