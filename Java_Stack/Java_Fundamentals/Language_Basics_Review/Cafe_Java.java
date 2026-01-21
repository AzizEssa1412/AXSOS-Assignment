// test file for Cafe_Java.java
package Language_Basics_Review;

public class Cafe_Java {
    public static void main(String[] args) {

        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotal = "Your total is $";

        double dripCoffee = 2.0;
        double latte = 4.25;
        double cappuccino = 4.75;

        String ahmad = "Ahmad";
        String sali = "Sali";
        String adam = "Adam";

        boolean isReadyAhmad = true;
        boolean isReadySali = false;
        boolean isReadyAdam = false;

        System.out.println(generalGreeting + sali);
        if (isReadySali) {
            System.out.println(sali + readyMessage);
        } else {
            System.out.println(sali + pendingMessage);
        }

        System.out.println("\n" + generalGreeting + ahmad);
        if (isReadyAhmad) {
            System.out.println(ahmad + readyMessage);
            System.out.println(displayTotal + cappuccino);
        } else {
            System.out.println(ahmad + pendingMessage);
        }

        System.out.println("\n" + generalGreeting + adam);
        if (isReadyAdam) {
            System.out.println(adam + readyMessage);
            System.out.println(displayTotal + latte);
        } else {
            System.out.println(adam + pendingMessage);
        }

        System.out.println("\n" + sali + " ordered 2 lattes.");
        System.out.println(displayTotal + (2 * latte));
        if (isReadySali) {
            System.out.println(sali + readyMessage);
        } else {
            System.out.println(sali + pendingMessage);
        }

        System.out.println("\n" + generalGreeting + adam);
        double difference = latte - dripCoffee;
        System.out.println("Price difference due: " + displayTotal + difference);
    }
}
