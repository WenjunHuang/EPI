#include <gtest/gtest.h>
#include "problem_5_8.h"

TEST(ReverseDigitsTest, ReverseDigits)
{
	EXPECT_EQ(2311, ReverseDigits(1132));
	EXPECT_EQ(-12313, ReverseDigits(-31321));
}