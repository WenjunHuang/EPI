#include <gtest/gtest.h>
#include "problem_5_1.h"

TEST(ParityTest, Parity)
{
	EXPECT_EQ(1, Parity(0b01111110011001L));
	EXPECT_EQ(0, Parity(0b011110111010011L));
}

TEST(ParityWithCacheTest, ParityWithCache)
{
	EXPECT_EQ(1, ParityWithCache(0b01111110011001L));
	EXPECT_EQ(0, ParityWithCache(0b011110111010011L));
}

TEST(ParityWithXorTest, ParityWithXor)
{
	EXPECT_EQ(1, ParityWithXor(0b01111110011001L));
	EXPECT_EQ(0, ParityWithXor(0b011110111010011L));
}