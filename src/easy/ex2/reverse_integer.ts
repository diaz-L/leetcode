export const MAX: number = Math.pow(2, 31) - 1;
export const MIN: number = Math.pow(2, 31) * -1;

export function reverseInteger(n: number): number {
    if (n <= MIN) return 0;
    if (n > MAX) return 0;

    let isNegative: boolean = n < 0 ? true : false;

    let numToStr: string = "" + Math.abs(n);
    numToStr = numToStr.split('').reverse().join('');
    let result: number = parseInt(numToStr);

    return isNegative ? result * -1 : result;
}