/**Recorrer un arreglo:

A-Crea y Recorre un arreglo e imprime cada elemento usando un ciclo for.
B-Recorre un arreglo en sentido inverso e imprime cada elemento.
C-Suma todos los números de un arreglo. */

const  frutas=["Manzana","Naranja","Mandarina"] 

for(let i=0; i< frutas.length;i++){
    console.log(frutas[i]);
    
}

for(let i=frutas.length -1; i>=0;i--){
console.log(frutas[i]);
}

//! --------------------------------------------------------
const numeros=[1,2,3,4,5]
let suma=0;
for(let i=0; i<numeros.length;i++){
    suma+= numeros[i]
}
console.log(suma);
