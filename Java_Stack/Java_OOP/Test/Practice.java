package Test;

public class Practice {

    private String name;
    private int Age;
    private String email;
    private String phone;

    //constracter  
    //instance
    Practice(String name, int age , String email , String phone ) {
        this.name = name ;
        this.Age = age ;
        this.email = email ;
        this.phone = phone ;
    }
    Practice(){

    }

    //sit
    public void setName(String firsName){
        this.name = firsName;
    }

    public String getName(){
        return this.name;
    }

    //access modefier

    public void printName(){
        System.out.println(this.name);
    }


    public void nameTimes(){
        for (int i = 0 ; i < this.Age ; i++){
            System.out.println(this.name);
        }
    }
}

//testing :
// int myNum = 5;
// float myFloat = 5.09f;
// char myChar = 'A';
// boolean myBool = true;
// String myText = 'Hello my name is aziz';


// String firstName = "Aziz";
// String lastName = "issa";
// String fuulName = firstName + lastName ;
// System.out.println(fuulName);


