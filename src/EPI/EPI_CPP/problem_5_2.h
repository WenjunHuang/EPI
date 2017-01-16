// 5.2 Swap bits
#pragma once
#include <cstdint>
#include <type_traits>
#include <numeric>
using namespace std;

template<typename T, enable_if_t<is_integral<T>::value>...>T SwapBits(T x, int i, int j) noexcept
{
	if (((x >> i) & 1) != ((x >> j) & 1))
	{
		typename T bit_mask = (1 << i) | (1 << j);
		x ^= bit_mask;
	}
	return x;
}