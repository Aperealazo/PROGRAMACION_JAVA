//! Imprimir los primeros 10 numeros de 3 en 3. 
//! Hazlo para Numeros positivos y negativos

let maximo = 10, minimo = -10;

console.log('Incrementos de 3 en 3'); 
for(let numero = 1; numero <= maximo; numero += 3 ){
    console.log(numero);
}

// 1  -2  -5  -8 
console.log('Decrementos de 3 en 3');
for(let numero = 1; numero >= minimo; numero -= 3 ){
    console.log(numero);
}