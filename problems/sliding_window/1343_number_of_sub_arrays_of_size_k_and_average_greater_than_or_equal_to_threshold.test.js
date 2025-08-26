const { numOfSubarrays } = require('./1343_number_of_sub_arrays_of_size_k_and_average_greater_than_or_equal_to_threshold.js');

describe("Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold - README Examples", () => {
    test("should return 3 for arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4", () => {
        expect(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4)).toBe(3);
    });

    test("should return 6 for arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5", () => {
        expect(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5)).toBe(6);
    });
});

describe("Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold - Edge Cases", () => {
    test("should handle single element array", () => {
        expect(numOfSubarrays([5], 1, 3)).toBe(1);
        expect(numOfSubarrays([2], 1, 3)).toBe(0);
    });

    test("should handle k equal to array length", () => {
        expect(numOfSubarrays([1,2,3], 3, 2)).toBe(1);
        expect(numOfSubarrays([1,2,3], 3, 3)).toBe(0);
    });

    test("should handle threshold = 0", () => {
        expect(numOfSubarrays([1,2,3,4], 2, 0)).toBe(3);
        expect(numOfSubarrays([-1,-2,3,4], 2, 0)).toBe(2);
    });

    test("should handle very high threshold", () => {
        expect(numOfSubarrays([1,2,3,4], 2, 100)).toBe(0);
    });
});

describe("Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold - Common Patterns", () => {
    test("should handle all subarrays meet threshold", () => {
        expect(numOfSubarrays([5,5,5,5], 2, 5)).toBe(3);
        expect(numOfSubarrays([6,6,6,6], 3, 6)).toBe(2);
    });

    test("should handle no subarrays meet threshold", () => {
        expect(numOfSubarrays([1,1,1,1], 2, 5)).toBe(0);
        expect(numOfSubarrays([2,3,1,2], 3, 4)).toBe(0);
    });

    test("should handle ascending array", () => {
        expect(numOfSubarrays([1,2,3,4,5], 3, 3)).toBe(3);
    });

    test("should handle descending array", () => {
        expect(numOfSubarrays([5,4,3,2,1], 3, 3)).toBe(1);
    });

    test("should handle equal threshold case", () => {
        expect(numOfSubarrays([3,3,3], 2, 3)).toBe(2);
    });
});

describe("Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold - Boundary Conditions", () => {
    test("should handle k = 1", () => {
        expect(numOfSubarrays([1,2,3,4,5], 1, 3)).toBe(3);
        expect(numOfSubarrays([5,4,3,2,1], 1, 3)).toBe(3);
    });

    test("should handle large numbers", () => {
        expect(numOfSubarrays([1000,2000,3000], 2, 1500)).toBe(2);
    });

    test("should handle negative numbers", () => {
        expect(numOfSubarrays([-1,2,-3,4], 2, 0)).toBe(1);
    });

    test("should handle mixed positive and negative", () => {
        expect(numOfSubarrays([-5,10,15,-10], 2, 5)).toBe(1);
    });
});

describe("Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold - Complex Scenarios", () => {
    test("should handle overlapping qualifying subarrays", () => {
        expect(numOfSubarrays([7,7,7,7,7], 3, 7)).toBe(3);
    });

    test("should handle partial qualifying pattern", () => {
        expect(numOfSubarrays([1,10,1,10,1], 3, 5)).toBe(2);
    });

    test("should handle fractional averages", () => {
        expect(numOfSubarrays([1,1,2], 2, 1)).toBe(2);
        expect(numOfSubarrays([1,1,1], 2, 1)).toBe(2);
    });

    test("should handle zeros in array", () => {
        expect(numOfSubarrays([0,5,0,5,0], 3, 2)).toBe(1);
    });

    test("should handle long arrays with small k", () => {
        const arr = [1,2,3,4,5,6,7,8,9,10];
        expect(numOfSubarrays(arr, 2, 5)).toBe(6);
    });

    test("should handle edge case with exact threshold match", () => {
        expect(numOfSubarrays([4,4,4,4], 2, 4)).toBe(3);
    });
});