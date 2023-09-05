
package ejerciciosarrays;

import javax.swing.JOptionPane;

public class EJERCICIOSARRAYS {

    public static void main(String[] args) {
        
        // ***PRIMER OPCION DE DEFINIR UN ARRAY***
        
        
        String nombres[]; nombres = new String[10];
        
        nombres[0] = "xiomi";
        nombres[1]="selena";
        nombres[2]="dana";
        nombres[3] = "abril";
        nombres[4]="ethel";
        nombres[5]="sofia";
        nombres[6] = "ludmila";
        nombres[7]="maxi";
        nombres[8]="cinthia";
        nombres[9]="eugenia";
        
        // COMO IMPRIMIR UN ARRAY CON INTERFAZ ( JOptionPane)
        
        for (int i = 0; i < 10; i++) {
            JOptionPane.showMessageDialog(null, nombres[i]);
            System.out.println("");
        }
        
        
    }
    
}
