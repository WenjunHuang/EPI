function ReversDigits(value) {
    var result = 0;
    var negtive = value < 0;
    value = Math.abs(value);
    while (value) {
        result = result * 10 + value % 10;
        value /= 10;
    }
    return negtive ? -result : result;
}
//# sourceMappingURL=problem_5_8.js.map