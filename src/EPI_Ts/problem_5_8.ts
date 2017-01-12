
function ReversDigits(value: number): number {
    let result = 0;
    let negtive = value < 0;
    value = Math.abs(value);

    while (value) {
        result = result * 10 + value % 10;
        value /= 10;
    }
    return negtive ? -result: result;
}