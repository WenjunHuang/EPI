package epi

import io.kotlintest.specs.ShouldSpec

/**
 * Created by rick on 2017/1/16.
 */

class Problem_5_8_Test : ShouldSpec() {
    init {
        should("success with positive value") {
            reverseDigits(6832314) shouldBe 4132386L
        }

        should("success with negative value") {
            reverseDigits(-3121342) shouldBe -2431213L
        }
    }
}