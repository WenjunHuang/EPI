#include <iostream>
#include <gtest/gtest.h>
#include <EPI/problem_5_1.h>
#include "EPI/problem_5_3.h"

int main(int argc, char* argv[])
{
		testing::InitGoogleTest(&argc, argv);
		return RUN_ALL_TESTS();
//	std::cout << '{';
//	for (int i = 0; i < 256; ++i)
//	{
//		int r = ReverseBitsUsingSwapBits((uint8_t)i);
//		std::cout << std::hex << std::showbase << r;
//		if (i % 50 == 0)
//			std::cout << '\n';
//		if (i != 255)
//		{
//			std::cout << ',';
//		}
//	}
//	std::cout << '}' << std::endl;
//	return 0;
}
