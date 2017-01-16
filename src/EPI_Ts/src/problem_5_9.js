"use strict";
function IsPalindrome(value) {
    if (value < 0)
        return false;
    value = Math.floor(value); // remove decimal fraction 
    var numDigits = Math.floor(Math.log(value) / Math.LOG10E) + 1;
    var numMask = Math.pow(10, numDigits - 1);
    for (var i = 0; i < Math.floor(numDigits / 2); ++i) {
        if (Math.floor(value / numDigits) !== value % 10)
            return false;
        value /= numMask;
        value /= 10;
        value = Math.floor(value);
        numMask = Math.floor(numMask / 100);
    }
    return true;
}
exports.IsPalindrome = IsPalindrome;
//# sourceMappingURL=problem_5_9.js.map