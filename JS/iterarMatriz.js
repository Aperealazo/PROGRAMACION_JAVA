let matriz= [['Felipe','Lenis','Damir'],['Valentino','Ariana','Celeste']];
let nombre='alex';
//*PREGUNTAMOS CUANTOS RENGLONES(FILAS) TENEMOS
console.log(matriz.length);
//*PREGUNTAMOS CUANTOS RENGLONES(FILAS) TENEMOS
console.log(matriz[0].length);

/*console.log(`Elemento [0][1] = ${matriz[0][1]} `);
console.log(`Elemento [1][2] = ${matriz[1][2]} `);*/
//! Filas
for(let ren=0;ren < matriz.length; ren++){
    //! Columnas
    for(let col=0;col < matriz[ren].length;col ++){
        console.log(matriz[ren][col]);

    }

}