#pragma once
#include <cmath>
#include <type_traits>

template<typename T, typename = std::enable_if<std::is_integral<T>::value, void>::type>
bool IsPalindrome(T value)
{
	const auto num_digits = static_cast<int>(floor(log10(value))) + 1;
	auto num_mask = static_cast<int>(pow(10, num_digits - 1));

	for (auto i = 0; i < num_digits / 2; ++i)
	{
		if (value / num_mask != value % 10)
			return false;

		value %= num_mask; // remove the most significant digit of value
		value /= 10; // remove the least significant digit of value
		num_mask /= 100; // because we have removed 2 digits from last value, so need to update num_mask
	}
	return true;
}
