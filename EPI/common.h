#pragma once
#include <type_traits>
#include <numeric>
using namespace std;

template<typename T,typename = enable_if<is_integral<T>::value>::type>
int BitsCount(T value)
{
	auto result = 0;
	while (value)
	{
		++result;
		value ^= (value - 1);
	}
	return result;
}