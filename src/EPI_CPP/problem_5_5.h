// Write a program that multiples two nonnegative integers.
// The only operators you are allowed to use are:
// * assignment,
// * the bitwise operator >>, <<, |, &, ~, ^ and
// * equality checks and Boolean combinations thereof.

#pragma once
#include <cstdint>
#include <atomic>
#include <type_traits>

template <typename T, typename... Ts, typename = typename std::enable_if<std::is_unsigned<T>::value, void>::type>
T Add(T a, Ts ...y)
{
	T b = Add(y...);
	T sum = 0, carryIn = 0, k = 1, temp_a = a, temp_b = b;
	while (temp_a || temp_b)
	{
		T ak = a & k, bk = b & k;
		T carryout = (ak & bk) | (ak & carryIn) | (bk & carryIn);
		sum |= (ak ^ bk ^ carryIn);
		carryIn = carryout << 1 , k <<= 1 , temp_a >>= 1 , temp_b >>= 1;
	}
	return sum | carryIn;
}

template <typename T, typename = typename std::enable_if<std::is_unsigned<T>::value, void>::type>
T Add(T a)
{
	return a;
}

template <typename T, typename = typename std::enable_if<std::is_unsigned<T>::value, void>::type>
T Multiply(T a) { return a; }

template <typename T, typename ...Ts, typename = typename std::enable_if<std::is_unsigned<T>::value, void>::type>
T Multiply(T y,Ts...xs)
{
	T x = Multiply(xs...);
	T sum = 0;
	while (x)
	{
		if (x & 1)
		{
			sum = Add(sum, y);
		}
		x >>= 1 , y <<= 1;
	}
	return sum;
}

