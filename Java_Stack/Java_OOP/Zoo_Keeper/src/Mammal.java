public class Mammal {
    private double energy;

    public Mammal(){
        this.energy = 100;
    }

    public double getEnergy() {
        return energy;
    }

    public void setEnergy(double energy) {
        this.energy = energy;
    }

    public void displayEnergy(){
        System.out.println(this.energy);
    }


}