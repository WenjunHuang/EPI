
export function ReverseDigits(value: number): number {
    let result = 0;
    let negtive = value < 0;
    value = Math.abs(value);

    while (value !== 0) {
        result = result * 10 + value % 10;
        value /= 10;
        value = Math.floor(value);
    }
    return negtive ? -result: result;
}