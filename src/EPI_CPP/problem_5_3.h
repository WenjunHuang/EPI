//5.3 reverse bits
#pragma once
#include <cstdint>
#include <numeric>
#include <EPI/problem_5_2.h>
#include <limits>
#include <type_traits>
using namespace std;

extern uint64_t precomputed_reverse[];

template <typename T,
          enable_if_t<is_integral<T>::value>...>
T ReverseBitsUsingSwapBits(T x)
{
	int digits = numeric_limits<T>::digits;
	for (auto i = 0; i < digits / 2; ++i)
	{
		x = SwapBits(x, i, digits - i - 1);
	}
	return x;
}

inline uint64_t ReverseBitsUsingCache(uint64_t x)
{
	const auto kWidth = 8Ui64;
	const auto kMask = 0xFFUi64;
	uint64_t result = precomputed_reverse[x & kMask] << (7 * kWidth)
		| precomputed_reverse[(x >> kWidth) & kMask] << (6 * kWidth)
		| precomputed_reverse[(x >> (2 * kWidth)) & kMask] << (5 * kWidth)
		| precomputed_reverse[(x >> (3 * kWidth)) & kMask] << (4 * kWidth)
		| precomputed_reverse[(x >> (4 * kWidth)) & kMask] << (3 * kWidth)
		| precomputed_reverse[(x >> (5 * kWidth)) & kMask] << (2 * kWidth)
		| precomputed_reverse[(x >> (6 * kWidth)) & kMask] << kWidth
		| precomputed_reverse[(x >> (7 * kWidth)) & kMask];
	return result;
}
