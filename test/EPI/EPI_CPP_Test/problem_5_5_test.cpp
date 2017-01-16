#include <gtest/gtest.h>
#include "problem_5_5.h"

TEST(MultiplyAndAddTest, MultiplyAndAdd)
{
	EXPECT_EQ(15, Multiply(3Ui32, 5Ui32));
	EXPECT_EQ(24, Multiply(3Ui32, 2Ui32, 4Ui32));
}