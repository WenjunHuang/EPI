// Reservese Digits
// *Example: input->1132 output->2311; input->-54324, output->-42345

#pragma once
#include <type_traits>
template<typename T,typename = std::enable_if<std::is_integral<T>::value, void>::type>
T ReverseDigits(T number)
{
	bool negative = number < 0;
	T result = 0;
	number = abs(number);
	while (number)
	{
		result = result * 10 + number % 10;
		number /= 10;
	}
	return negative ? -result : result;
}