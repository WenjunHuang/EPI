
export function IsPalindrome(value: number): boolean {
    if (value < 0)
        return false;
    value = Math.floor(value); // remove decimal fraction 

    const numDigits = Math.floor(Math.log(value) / Math.LOG10E) + 1;
    let numMask = Math.pow(10, numDigits - 1);

    for (let i = 0; i < Math.floor(numDigits / 2); ++i) {
        if (Math.floor(value / numDigits) !== value % 10)
            return false;

        value /= numMask;
        value /= 10;
        value = Math.floor(value);

        numMask = Math.floor(numMask / 100);
    }
    return true;
}