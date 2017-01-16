package epi;

/**
 * Created by rick on 2017/1/16.
 */
public final class Problem_5_5 {
    public static long reverseDigits(long value) {
        long result = 0;
        boolean negative = value < 0;
        value = Math.abs(value);
        while (value != 0) {
            final long remainder = value % 10;
            result = result * 10 + remainder;
            value /= 10;
        }
        return negative ? -result : result;
    }
}
