package epi;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Created by rick on 2017/1/16.
 */
public class Problem_5_8_Test {
    @Test
    public void reverseDigits_PositiveValue_Success(){
        // arrange
        long input = 1423462;
        long expect = 2643241;

        // act
        long result = Problem_5_5.reverseDigits(input);

        // assert
        assertEquals(expect, result);
    }

    @Test
    public void reverseDigits_NegativeValue_Success() {
        // arrange
        long input = -12354353;
        long expect = -35345321;

        //act
        long result = Problem_5_5.reverseDigits(input);

        // assert
        assertEquals(expect, result);
    }
}
