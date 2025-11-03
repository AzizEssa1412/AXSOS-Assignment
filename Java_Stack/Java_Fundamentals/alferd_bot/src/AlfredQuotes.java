import java.util.Date; // We import the Date class from the java.util library to use the time and date.

public class AlfredQuotes {
    
    public String basicGreeting() {
        return "Hello, lovely to see you. How are you?";
    }

    // 1️ Welcome the user
    // This function takes a person's name and prints a greeting containing the name
    public String guestGreeting(String name) {
    // String.format is used to insert a variable within the text
        return String.format("Hello, %s. Lovely to see you.", name);
    }

    // 2️ Date Announcement
// Declares the current time and date using the Date class    
    public String dateAnnouncement() {
        Date date = new Date(); // Create an object representing the current time
        return "It is currently " + date.toString();
    }

    // 3️ Respond Before Alexis
    // A function that receives the text of the conversation and checks if it contains the word "Alexis" or "Alfred"    
    public String respondBeforeAlexis(String conversation) {
        if (conversation.indexOf("Alexis") != -1) {
            // If Alexis is mentioned
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        } else if (conversation.indexOf("Alfred") != -1) {
            // If Alfred is mentioned
            return "At your service. As you wish, naturally.";
        } else {
            // If neither is mentioned
            return "Right. And with that I shall retire.";
        }
    }

    // NINJA BONUS: Overloading method
    // Same function name as guestGreeting but with the addition of a new parameter representing the time of day    
    public String guestGreeting(String name, String dayPeriod) {
        return String.format("Good %s, %s. Lovely to see you.", dayPeriod, name);
    }

    // SENSEI BONUS (optional)
    // Create an additional function that demonstrates how Alfred uses String methods in a unique way    
    public String yell(String phrase) {
    // toUpperCase converts the text to capital letters (as if Alfred is shouting)        
        return phrase.toUpperCase() + "!!!";
    }
}
