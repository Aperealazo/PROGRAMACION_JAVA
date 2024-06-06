//! arreglos en javaScript
/*
{
    "key": "ctrl+shift+l",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "console.log(${TM_SELECTED_TEXT}$1);"
    }
 }
*/

let numeroArreglo = []
numeroArreglo[0] = 12;
numeroArreglo[1] = 14;
numeroArreglo[3] = "Hola"
console.log(numeroArreglo)

let grupoC=["Argentina","Chile","Peru","Canada"];

for(let i=0;i<grupoC.length;i++){
    console.log(`Arreglo Pos. ${i} = ${grupoC[i]}`);
}
console.log(grupoC);