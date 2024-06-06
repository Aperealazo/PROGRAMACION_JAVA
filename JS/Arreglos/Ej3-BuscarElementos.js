/**Buscar elementos en un arreglo:
 * 
Busca un elemento específico en un arreglo.
Verifica si un elemento existe en un arreglo.
Cuenta el número de veces que aparece un elemento en un arreglo.
 * 
 */
const paises =["Argentina","Brasil","Chile","Bolivia"]
const buscaPais="Argentina"

for (const pais of paises) {
    if (pais === buscaPais) {
      encontrado = true;
      break;
    }
  }
  
  if (encontrado) {
    console.log(`El país ${buscaPais} está en el arreglo`);
  } else {
    console.log(`El país ${buscaPais} no está en el arreglo`);
  }
  