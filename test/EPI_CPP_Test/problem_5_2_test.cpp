#include <gtest/gtest.h>
#include "problem_5_2.h"

TEST(SwapBitsTest, SwapBits)
{
	EXPECT_EQ(0b111001100, SwapBits(0b111001100, 2, 3));
	EXPECT_EQ(0b10, SwapBits(0b01, 0, 1));
	EXPECT_EQ(0b100010, SwapBits(0b110000, 1, 4));
}