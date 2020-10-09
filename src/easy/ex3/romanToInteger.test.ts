import { romanToInt } from "./romanToInteger";

describe("roman numerals to integer", () => {

    it("can convert numeral of one digit", () => {
        let result: number = romanToInt("V");
        expect(result).toEqual(5);

        result = romanToInt("X");
        expect(result).toEqual(10);

        result = romanToInt("I");
        expect(result).toEqual(1);
    });

    it("can convert numeral of multiple digits", () => {
        let result: number = romanToInt("LVIII");
        expect(result).toEqual(58);

        result = romanToInt("MCMXCIV");
        expect(result).toEqual(1994);
    })

    it("can convert edge case: IV equals 4", () => {
        let result: number = romanToInt("IV");
        expect(result).toEqual(4);
    });

    it("can convert edge case: IX to equal 9", () => {
        let result: number = romanToInt("IX");
        expect(result).toEqual(9);
    });

    it("can convert edge case: XL to equal 40", () => {
        let result: number = romanToInt("XL");
        expect(result).toEqual(40);
    });

    it("can convert edge case: XC to equal 90", () => {
        let result: number = romanToInt("XC");
        expect(result).toEqual(90);
    });

    it("can convert edge case: CD to equal 400", () => {
        let result: number = romanToInt("CD");
        expect(result).toEqual(400);
    });

    it("can convert edge case: CM to equal 900", () => {
        let result: number = romanToInt("CM");
        expect(result).toEqual(900);
    });
})