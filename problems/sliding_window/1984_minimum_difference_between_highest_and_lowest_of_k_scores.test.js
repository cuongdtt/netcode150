const { minimumDifference } = require('./1984_minimum_difference_between_highest_and_lowest_of_k_scores.js');

describe("Minimum Difference Between Highest and Lowest of K Scores - README Examples", () => {
    test("should return 0 for nums = [90], k = 1", () => {
        expect(minimumDifference([90], 1)).toBe(0);
    });

    test("should return 2 for nums = [9,4,1,7], k = 2", () => {
        expect(minimumDifference([9,4,1,7], 2)).toBe(2);
    });
});

describe("Minimum Difference Between Highest and Lowest of K Scores - Edge Cases", () => {
    test("should handle k = 1", () => {
        expect(minimumDifference([100], 1)).toBe(0);
        expect(minimumDifference([1,2,3], 1)).toBe(0);
    });

    test("should handle k equal to array length", () => {
        expect(minimumDifference([1,3,5], 3)).toBe(4);
        expect(minimumDifference([10,20,30,40], 4)).toBe(30);
    });

    test("should handle two elements", () => {
        expect(minimumDifference([5,10], 2)).toBe(5);
        expect(minimumDifference([1,100], 2)).toBe(99);
    });

    test("should handle all same values", () => {
        expect(minimumDifference([5,5,5,5], 2)).toBe(0);
        expect(minimumDifference([3,3,3], 3)).toBe(0);
    });
});

describe("Minimum Difference Between Highest and Lowest of K Scores - Common Patterns", () => {
    test("should handle sorted ascending array", () => {
        expect(minimumDifference([1,2,3,4,5], 3)).toBe(2);
        expect(minimumDifference([1,3,5,7,9], 2)).toBe(2);
    });

    test("should handle sorted descending array", () => {
        expect(minimumDifference([9,7,5,3,1], 3)).toBe(2);
        expect(minimumDifference([10,8,6,4,2], 2)).toBe(2);
    });

    test("should handle unsorted arrays", () => {
        expect(minimumDifference([5,1,9,3,7], 3)).toBe(4);
        expect(minimumDifference([10,2,8,4,6], 2)).toBe(2);
    });

    test("should find optimal window", () => {
        expect(minimumDifference([1,10,2,11,3], 3)).toBe(2);
    });
});

describe("Minimum Difference Between Highest and Lowest of K Scores - Boundary Conditions", () => {
    test("should handle large numbers", () => {
        expect(minimumDifference([1000,2000,3000], 2)).toBe(1000);
        expect(minimumDifference([10000,50000,30000], 2)).toBe(20000);
    });

    test("should handle small differences", () => {
        expect(minimumDifference([100,101,102,103], 2)).toBe(1);
        expect(minimumDifference([50,51,52,53,54], 3)).toBe(2);
    });

    test("should handle gaps in numbers", () => {
        expect(minimumDifference([1,5,100,200], 2)).toBe(4);
        expect(minimumDifference([10,50,90,130], 3)).toBe(80);
    });

    test("should handle maximum constraints", () => {
        const nums = Array.from({length: 100}, (_, i) => i * 100);
        expect(minimumDifference(nums, 5)).toBe(400);
    });
});

describe("Minimum Difference Between Highest and Lowest of K Scores - Complex Scenarios", () => {
    test("should handle multiple optimal windows", () => {
        expect(minimumDifference([1,2,10,11], 2)).toBe(1);
        expect(minimumDifference([5,6,15,16,25,26], 2)).toBe(1);
    });

    test("should handle clustered values", () => {
        expect(minimumDifference([1,2,3,100,101,102], 3)).toBe(2);
    });

    test("should handle outliers", () => {
        expect(minimumDifference([1,1000,2,3,4], 3)).toBe(2);
        expect(minimumDifference([50,1,2,3,100], 3)).toBe(2);
    });

    test("should handle large k values", () => {
        expect(minimumDifference([1,5,2,8,3,9,4], 5)).toBe(7);
    });

    test("should handle duplicate values in different positions", () => {
        expect(minimumDifference([1,5,1,5,1,5], 3)).toBe(4);
        expect(minimumDifference([3,7,3,7,3], 2)).toBe(0);
    });

    test("should handle random distribution", () => {
        expect(minimumDifference([87,34,92,15,78], 3)).toBe(58);
    });
});