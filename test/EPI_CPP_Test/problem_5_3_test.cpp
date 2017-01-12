#include <cstdint>
#include <gtest/gtest.h>
#include <EPI/problem_5_3.h>
using namespace std;
TEST(ReverseBitsUsingSwapBitsTest, ReverseBitsUsingSwapBits)
{
	EXPECT_EQ((uint8_t)0b11110000, ReverseBitsUsingSwapBits((uint8_t)0b00001111));
	EXPECT_EQ((uint16_t)0xF0F0, ReverseBitsUsingSwapBits((uint16_t)0x0F0F));
	EXPECT_EQ((uint32_t)0x0F0F0F0F, ReverseBitsUsingSwapBits((uint32_t)0xF0F0F0F0));
}

TEST(ReservseBitsUsingCache, ReverseBitsUsingCache)
{
	EXPECT_EQ(0xFUi64, ReverseBitsUsingCache(0xF000000000000000Ui64));
	EXPECT_EQ(0x000000000000000FUi64, ReverseBitsUsingCache(0xF000000000000000Ui64));
	EXPECT_EQ(0x00000000000000FFUi64, ReverseBitsUsingCache(0xFF00000000000000Ui64));
	EXPECT_EQ(0x8000000000000000Ui64, ReverseBitsUsingCache(0x0000000000000001Ui64));
	EXPECT_EQ(0xF0F0F0F0F0F0F0F0Ui64, ReverseBitsUsingCache(0x0F0F0F0F0F0F0F0FUi64));
}

