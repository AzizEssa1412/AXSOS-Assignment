package Test;

public class Practice {

    String name;
    int Age;
    String email;
    String phone;

    Practice(String name, int age , String email , String phone ) {
        this.name = name ;
        this.Age = age ;
        this.email = email ;
        this.phone = phone ;
    }

    //access modefier

    public void printName(){
        System.out.println(this.name);
    }

}
