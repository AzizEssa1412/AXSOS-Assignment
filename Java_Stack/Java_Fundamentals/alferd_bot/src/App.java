public class App {
    public static void main(String[] args) {
        // Create an object of the AlfredQuotes class to use functions        
        AlfredQuotes alfredBot = new AlfredQuotes();

        // Call and test each function
        String testGreeting = alfredBot.basicGreeting();
        String testGuestGreeting = alfredBot.guestGreeting("Beth Kane");
        String testDateAnnouncement = alfredBot.dateAnnouncement();

        String alexisTest = alfredBot.respondBeforeAlexis("Alexis! Play some low-fi beats.");
        String alfredTest = alfredBot.respondBeforeAlexis("I can't find my yo-yo. Maybe Alfred will know where it is.");
        String notRelevantTest = alfredBot.respondBeforeAlexis("Maybe that's what Batman is about. Not winning. But failing..");

        String testGuestGreetingTime = alfredBot.guestGreeting("Beth Kane", "evening");
        String testYell = alfredBot.yell("Master Wayne, dinner is ready");

        // Print the results for testing on the console
        System.out.println(testGreeting);
        System.out.println(testGuestGreeting);
        System.out.println(testDateAnnouncement);
        System.out.println(alexisTest);
        System.out.println(alfredTest);
        System.out.println(notRelevantTest);
        System.out.println(testGuestGreetingTime);
        System.out.println(testYell);
    }
}
