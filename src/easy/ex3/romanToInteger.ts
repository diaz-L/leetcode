
export function romanToInt(s: string): number {
    let result: number = 0;

    s.split("").forEach(c => {
        switch (c) {
            case "I":
                result += 1;
                break;
            case "V":
                result += 5;
                break;
            case "X":
                result += 10;
                break;
            case "L":
                result += 50;
                break;
            case "C":
                result += 100;
                break;
            case "D":
                result += 500;
                break;
            case "M":
                result += 1000;
                break;
        }
    });

    if (s.indexOf("IV") !== -1 || s.indexOf("IX") !== -1) result -= 2;
    if (s.indexOf("XL") !== -1 || s.indexOf("XC") !== -1) result -= 20;
    if (s.indexOf("CD") !== -1 || s.indexOf("CM") !== -1) result -= 200;

    return result;
}