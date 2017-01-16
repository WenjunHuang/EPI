#include "problem_5_1.h"

std::uint16_t Parity(std::uint64_t x)
{
	short result = 0;
	while (x)
	{
		result ^= 1;
		x &= (x - 1);
	}
	return result;
}

std::uint8_t precomputed_parity[] = { 0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,1
 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1
 ,0 ,0 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0
 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,1
 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0
 ,1 ,0 ,1 ,1 ,0 };

std::uint16_t ParityWithCache(std::uint64_t x)
{
	const auto kByteSize = 8;
	const auto kBitMask = 0xFF;

	return precomputed_parity[x >> (7 * kByteSize)]
		^ precomputed_parity[(x >> (6 * kByteSize)) & kBitMask]
		^ precomputed_parity[(x >> (5 * kByteSize)) & kBitMask]
		^ precomputed_parity[(x >> (4 * kByteSize)) & kBitMask]
		^ precomputed_parity[(x >> (3 * kByteSize)) & kBitMask]
		^ precomputed_parity[(x >> (2 * kByteSize)) & kBitMask]
		^ precomputed_parity[(x >> (1 * kByteSize)) & kBitMask]
		^ precomputed_parity[x & kBitMask];
}

std::uint16_t ParityWithXor(std::uint64_t x)
{
	x ^= x >> 32;
	x ^= x >> 16;
	x ^= x >> 8;
	x ^= x >> 4;
	x ^= x >> 2;
	x ^= x >> 1;
	return x & 0x1;
}

