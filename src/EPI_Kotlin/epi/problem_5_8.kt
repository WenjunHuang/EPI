package epi

/**
 * Created by rick on 2017/1/16.
 */
fun reverseDigits(value: Long): Long {
    var result = 0L
    val negative = value < 0
    var absValue = Math.abs(value)

    while (absValue != 0L){
       val remainder = absValue % 10;
        result = result * 10 + remainder
        absValue /= 10
    }

    return if (negative) -result else result

}