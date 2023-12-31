package ejerciciosarrays;

import javax.swing.JOptionPane;

/*
Crea un array de 10 posiciones de números con valores pedidos por teclado.
Muestra por consola el indice y el valor al que corresponde. Haz dos métodos,
uno para rellenar valores y otro para mostrar.
*/
public class Ejercicio_5 {
    public static void main(String[] args) {
        int tamanio=10;
        int num[] = new int[tamanio];
        
        //LLAMAMOS AL METODO LLENAR VALORES
        llenarValores(num);
        
        //LLAMAMOS AL METODO MOSTRAR ARRAY
        mostrarArray(num);
    }
    // CREAMO EL METODO LLENAR VALORES PARA EL ARRAY
    
    public static void llenarValores(int lista[]){
        for (int i = 0; i < lista.length; i++) {
            String texto = JOptionPane.showInputDialog("Introduci un numero");
            lista[i]= Integer.parseInt(texto);
        }
    }
        // CREAMO EL METODO MOSTRAR ARRAY 
    
    public static void mostrarArray(int lista[]){
        for (int i = 0; i < lista.length; i++) {
            JOptionPane.showMessageDialog(null, "En el Indice "+i+" Esta el valor"+lista[i]);
        }
    }
    
}
