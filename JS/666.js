let frutas = [1,2,3,4,5,6,7]


frutas.push('Mandarina')// Agrega un nuevo objeto a mi arreglo 
frutas.push('Uva')// Agrega un nuevo objeto a mi arreglo 

//frutas.pop()// Elimna el ultimo objeto  Agregado de mi arreglo 

console.log(frutas);

let index = frutas.indexOf(5)
if(index !== -1){
    frutas.splice(index,1 )
}else{ console.log('No se encontro la fruta '+index);}
console.log(frutas);