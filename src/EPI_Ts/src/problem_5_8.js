"use strict";
function ReverseDigits(value) {
    var result = 0;
    var negtive = value < 0;
    value = Math.abs(value);
    while (value !== 0) {
        result = result * 10 + value % 10;
        value /= 10;
        value = Math.floor(value);
    }
    return negtive ? -result : result;
}
exports.ReverseDigits = ReverseDigits;
//# sourceMappingURL=problem_5_8.js.map