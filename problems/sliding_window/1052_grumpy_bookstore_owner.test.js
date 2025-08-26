const { maxSatisfied } = require('./1052_grumpy_bookstore_owner.js');

describe("Grumpy Bookstore Owner - README Examples", () => {
    test("should return 16 for customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3", () => {
        expect(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3)).toBe(16);
    });

    test("should return 1 for customers = [1], grumpy = [0], minutes = 1", () => {
        expect(maxSatisfied([1], [0], 1)).toBe(1);
    });
});

describe("Grumpy Bookstore Owner - Edge Cases", () => {
    test("should handle single customer already satisfied", () => {
        expect(maxSatisfied([5], [0], 1)).toBe(5);
    });

    test("should handle single customer grumpy", () => {
        expect(maxSatisfied([5], [1], 1)).toBe(5);
    });

    test("should handle minutes equal to array length", () => {
        expect(maxSatisfied([1,2,3], [1,1,1], 3)).toBe(6);
        expect(maxSatisfied([1,2,3], [0,0,0], 3)).toBe(6);
    });

    test("should handle no grumpy minutes", () => {
        expect(maxSatisfied([1,2,3,4], [0,0,0,0], 2)).toBe(10);
    });

    test("should handle all grumpy minutes", () => {
        expect(maxSatisfied([1,2,3,4], [1,1,1,1], 2)).toBe(5);
    });
});

describe("Grumpy Bookstore Owner - Common Patterns", () => {
    test("should handle alternating grumpy pattern", () => {
        expect(maxSatisfied([1,2,1,2], [0,1,0,1], 1)).toBe(5);
        expect(maxSatisfied([1,2,1,2], [0,1,0,1], 2)).toBe(6);
    });

    test("should handle consecutive grumpy minutes", () => {
        expect(maxSatisfied([1,2,3,4], [0,1,1,0], 2)).toBe(10);
        expect(maxSatisfied([1,2,3,4], [1,1,0,0], 2)).toBe(10);
    });

    test("should handle no customers during some minutes", () => {
        expect(maxSatisfied([0,1,0,2,0], [1,0,1,0,1], 3)).toBe(3);
    });

    test("should optimize for maximum benefit", () => {
        expect(maxSatisfied([2,1,7,8,1], [1,0,1,1,0], 2)).toBe(16);
    });
});

describe("Grumpy Bookstore Owner - Boundary Conditions", () => {
    test("should handle minutes = 1", () => {
        expect(maxSatisfied([4,10,10], [1,1,0], 1)).toBe(24);
    });

    test("should handle large customer numbers", () => {
        expect(maxSatisfied([100,200,300], [1,1,1], 2)).toBe(500);
    });

    test("should handle optimal window at start", () => {
        expect(maxSatisfied([10,1,1,1], [1,0,0,0], 1)).toBe(13);
    });

    test("should handle optimal window at end", () => {
        expect(maxSatisfied([1,1,1,10], [0,0,0,1], 1)).toBe(13);
    });
});

describe("Grumpy Bookstore Owner - Complex Scenarios", () => {
    test("should handle multiple equally good windows", () => {
        expect(maxSatisfied([5,8,5], [1,0,1], 1)).toBe(13);
    });

    test("should handle overlapping benefits", () => {
        expect(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 2)).toBe(13);
    });

    test("should handle long arrays with small windows", () => {
        const customers = [1,2,1,2,1,2,1,2];
        const grumpy = [1,1,0,0,1,1,0,0];
        expect(maxSatisfied(customers, grumpy, 2)).toBe(9);
    });

    test("should handle case where technique spans already satisfied customers", () => {
        expect(maxSatisfied([3,8,2,5], [0,1,1,0], 3)).toBe(18);
    });

    test("should handle zeros in customer array", () => {
        expect(maxSatisfied([0,5,0,3,0], [1,1,1,1,1], 2)).toBe(5);
    });
});