#pragma once
#include <cstdint>
#include <numeric>
#include <limits>
using namespace std;

template <typename T, typename enable_if<is_integral<T>::value>::type...>
T ClosestIntSameBitCount(T value)
{
	int digits = numeric_limits<T>::digits;
	for (int i = 0; i < digits - 1; ++i)
	{
		if (((value >> i) & 0x1) != ((value >> (i + 1)) & 0x1))
		{
			value ^= (T{ 1 } << i) | (T{ 1 } << (i + 1));
			return value;
		}
	}
	return value;
}
