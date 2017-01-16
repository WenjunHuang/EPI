package epi;

/**
 * Created by rick on 2017/1/16.
 */
public final class Problem_5_1 {
    public static boolean parity(long value) {
        boolean result = false;
        while (value != 0){
           value &= value - 1;
           result = !result;
        }
        return result;
    }
}
