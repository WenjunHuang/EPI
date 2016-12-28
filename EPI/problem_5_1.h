#pragma once
#include <cstdint>
std::uint16_t Parity(std::uint64_t);
std::uint16_t ParityWithCache(std::uint64_t);
std::uint16_t ParityWithXor(std::uint64_t);
