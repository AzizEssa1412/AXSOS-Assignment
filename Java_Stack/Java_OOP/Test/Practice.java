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
