#include "problem_5_9.h"
#include <gtest/gtest.h>

TEST(IsPalindromeTest, IsPalindrome)
{
	EXPECT_EQ(true, IsPalindrome(31313));
	EXPECT_EQ(false, IsPalindrome(313132));
	EXPECT_EQ(true, IsPalindrome(1));
}

