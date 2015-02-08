package date;
public class Date {
    public static void main (String[] args) {
        String day = "Sunday";
        int date = 8;
        String month = "February";
        int year = 2015;
        System.out.println ("American format:");
        System.out.println (day + ", " + month + " " + date + ", " + year);
        System.out.println ("European format:");
        System.out.println (day + " " + date + " " + month + ", " + year);
    }
}