class Solution {
    public char check(String sent) {
        char[] see = new char[26];

        for (char a : sent.toCharArray()) {
            see[a - 'a'] = true;
        }
        for (boolean Present : see) {
            if (!Present) {
                return false;
            }
        }
        return true;
    }
}