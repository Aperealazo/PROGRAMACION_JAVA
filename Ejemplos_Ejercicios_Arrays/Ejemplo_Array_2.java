package ejerciciosarrays;


import javax.swing.JOptionPane;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author ALEX
 */
public class EjercicioArray1_2 {
    public static void main(String[] args) {
        
        //TAMBIEN PUEDES DECLARAR,CREAR E INICIALIZAR UN ARRAY EN UNA SOLA LINEA
        String nombres [] = {"Camila","Maxi","Eugenia","Brayan","Pricsila","Dana","Juan","Tony"};
        JOptionPane.showMessageDialog(null, nombres.length);
        
        // COMO IMPRIMIR UN ARRAY CON INTERFAZ ( JOptionPane)
   
        for (int i = 0; i < 8; i++) {
            JOptionPane.showMessageDialog(null, nombres[i]);
        }
    }
    
}
