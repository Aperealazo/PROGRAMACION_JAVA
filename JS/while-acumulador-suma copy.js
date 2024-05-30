// realizar la suma de los primeros
// 5 numeros utilizando un ciclo for
// Sumar los primeros 5 numeros (for)

//! Sumar los primeros 5 numeros (while)
let numero = 1, maximo = 5, acumuladorSuma = 0;
while(numero <= maximo){
    //! Imprimimos lo que va a sumar
    console.log(`${acumuladorSuma} + ${numero}`);

    //! Realizamos la suma parcial
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
    numero++;
}
console.log(acumuladorSuma);