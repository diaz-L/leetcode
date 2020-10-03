import { reverseInteger, MIN, MAX } from "./reverse_integer";

describe("reverse integer: given a 32-bit integer reverse digits of that number", () => {
    it("does overflow", () => {
        let result: number = reverseInteger(MIN);
        expect(result).toBe(0);
    })

    it("does underflow", () => {
        let result: number = reverseInteger(MAX + 2);
        expect(result).toBe(0);
    })

    it("does reverse positive number", () => {
        let result: number = reverseInteger(123);
        expect(result).toBe(321);

        result = reverseInteger(120);
        expect(result).toBe(21);
    })

    it("does reverse negative number", () => {
        let result: number = reverseInteger(-123);
        expect(result).toBe(-321);
    })

    it("does handle zero input", () => {
        let result: number = reverseInteger(0);
        expect(result).toBe(0);
    })
})