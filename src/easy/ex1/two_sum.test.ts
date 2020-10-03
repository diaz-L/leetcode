import { twoSum } from "./two_sum";

describe("two sum: return indices of array whose sum adds up to target", () => {
	it("does array: [2,7,11,15] target: 9, equal indices [0,1]", () => {
		let results: number[] = twoSum([2, 7, 11, 15], 9);
		expect(results).toEqual([0, 1]);
	});

	it("does array [3,2,4] target: 6, equal indices [1,2]", () => {
		let results: number[] = twoSum([3, 2, 4], 6);
		expect(results).toEqual([1, 2]);
	});

	it("does array [3,3] target 6:, equal indices [0,1]", () => {
		let results: number[] = twoSum([3, 3], 6);
		expect(results).toEqual([0, 1]);
	});
});
