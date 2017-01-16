package epi;

import org.junit.Assert;
import org.junit.Test;

import static epi.Problem_5_1.parity;

/**
 * Created by rick on 2017/1/16.
 */
public class Problem_5_1_Test {
    @Test
    public void parity_PositiveValue_Success() {
        // arrange
        long value = 0x753L;
        boolean expect = true;

        // act
        boolean result = parity(value);

        // assert
        Assert.assertEquals(expect, result);
    }

    @Test
    public void parity_NegativeValue_Success() {
        // arrange
        long value = -0x753L;
        boolean expect = false;

        // act
        boolean result = parity(value);

        //assert
        Assert.assertEquals(expect, result);
    }

    @Test
    public void parity_MinNegativeValue_Success() {
        // arrange
        long value = Long.MIN_VALUE;

        boolean expect = true;

        // act
        boolean result = parity(value);

        // assert
        Assert.assertEquals(expect, result);
    }
}
