#include <gtest/gtest.h>
#include "problem_5_4.h"

TEST(ClosestIntSameBitCountTest, ClosestIntSameBitCount)
{
	EXPECT_EQ(0b1011Ui64, ClosestIntSameBitCount(0b111Ui64));
}