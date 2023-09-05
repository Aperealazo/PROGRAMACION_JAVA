/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ejerciciosarrays;

import javax.swing.JOptionPane;

public class Ejercicio_5_1 {
    public static void main(String[] args) {
        int tamanio = 10;
        int num[] = new int[tamanio];
        llenarValores(num);
        mostrarValores(num);
        
    }
    public static void llenarValores(int lista[]){
        for (int i = 0; i < lista.length; i++) {
            String  ingresonumero = JOptionPane.showInputDialog("Por favor ingrese un numero");
            lista[i]=Integer.parseInt(ingresonumero);
        }
    
    }
    public static void mostrarValores(int lista[]){
        for (int i = 0; i < lista.length; i++) {
            JOptionPane.showMessageDialog(null,"EN EL INDICE "+i+" ESTA EL VALOR "+lista[i]);

        }
    }
}
