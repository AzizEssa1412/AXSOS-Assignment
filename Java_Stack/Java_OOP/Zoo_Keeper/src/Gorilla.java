import jdk.jfr.BooleanFlag;

import java.util.LinkedList;

public class Gorilla extends Mammal{

    public Gorilla(){
        super();
    }

    public void throwSomething(){
        this.setEnergy(this.getEnergy()-5);
        System.out.println("the gorilla has thrown an object.");
        if(this.getEnergy() < 0) {
            this.setEnergy(0);
        }
    }



    public void eatBananas(){
        if(this.getEnergy() + 10> 100){
            this.setEnergy(100);
        }else{
            this.setEnergy(this.getEnergy()+10);
        }
        if(this.getEnergy() > 50){
            System.out.println("The Gorilla is happy");
        }else{
            System.out.println("The Gorilla is not happy");
        }
    }

    public void climb(){
        this.setEnergy(this.getEnergy() - 10.0);
        System.out.println("the gorilla has climbed a tree.");
        if(this.getEnergy() < 0.0) {
            this.setEnergy(0.0);
        }
    }


}