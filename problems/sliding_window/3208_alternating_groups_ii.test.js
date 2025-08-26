const { numberOfAlternatingGroups } = require('./3208_alternating_groups_ii.js');

describe("Alternating Groups II - README Examples", () => {
    test("should return 3 for colors = [0,1,0,1,0], k = 3", () => {
        expect(numberOfAlternatingGroups([0,1,0,1,0], 3)).toBe(3);
    });

    test("should return 2 for colors = [0,1,0,0,1,0,1], k = 6", () => {
        expect(numberOfAlternatingGroups([0,1,0,0,1,0,1], 6)).toBe(2);
    });

    test("should return 1 for colors = [1,1,0,1], k = 4", () => {
        expect(numberOfAlternatingGroups([1,1,0,1], 4)).toBe(1);
    });
});

describe("Alternating Groups II - Edge Cases", () => {
    test("should handle minimum size array", () => {
        expect(numberOfAlternatingGroups([0], 1)).toBe(1);
        expect(numberOfAlternatingGroups([1], 1)).toBe(1);
    });

    test("should handle k = 1", () => {
        expect(numberOfAlternatingGroups([0,1,0], 1)).toBe(3);
        expect(numberOfAlternatingGroups([1,1,1], 1)).toBe(3);
    });

    test("should handle k equal to array length", () => {
        expect(numberOfAlternatingGroups([0,1,0], 3)).toBe(1);
        expect(numberOfAlternatingGroups([0,0,1], 3)).toBe(0);
    });

    test("should handle all same colors", () => {
        expect(numberOfAlternatingGroups([0,0,0,0], 2)).toBe(0);
        expect(numberOfAlternatingGroups([1,1,1,1], 3)).toBe(0);
    });
});

describe("Alternating Groups II - Common Patterns", () => {
    test("should handle perfect alternating pattern", () => {
        expect(numberOfAlternatingGroups([0,1,0,1,0,1], 2)).toBe(6);
        expect(numberOfAlternatingGroups([1,0,1,0,1,0], 3)).toBe(6);
    });

    test("should handle partial alternating patterns", () => {
        expect(numberOfAlternatingGroups([0,1,1,0,1,0], 3)).toBe(2);
        expect(numberOfAlternatingGroups([1,0,0,1,0,1], 4)).toBe(1);
    });

    test("should handle no alternating groups", () => {
        expect(numberOfAlternatingGroups([0,0,1,1,0,0], 2)).toBe(0);
        expect(numberOfAlternatingGroups([1,1,0,0,1,1], 3)).toBe(0);
    });
});

describe("Alternating Groups II - Boundary Conditions", () => {
    test("should handle large k values", () => {
        const colors = [0,1,0,1,0,1,0,1,0,1];
        expect(numberOfAlternatingGroups(colors, 10)).toBe(10);
    });

    test("should handle k larger than array length", () => {
        expect(numberOfAlternatingGroups([0,1,0], 5)).toBe(0);
    });

    test("should handle circular nature correctly", () => {
        expect(numberOfAlternatingGroups([0,1,0,1], 2)).toBe(4);
        expect(numberOfAlternatingGroups([1,0,1,0], 3)).toBe(4);
    });
});

describe("Alternating Groups II - Complex Scenarios", () => {
    test("should handle mixed patterns with breaks", () => {
        expect(numberOfAlternatingGroups([0,1,0,0,1,0,1,0], 3)).toBe(4);
    });

    test("should handle long sequences", () => {
        const longPattern = [0,1,0,1,0,1,1,0,1,0,1,0];
        expect(numberOfAlternatingGroups(longPattern, 4)).toBe(7);
    });

    test("should handle edge wrapping cases", () => {
        expect(numberOfAlternatingGroups([1,0,1,0,0], 3)).toBe(2);
        expect(numberOfAlternatingGroups([0,1,1,0,1], 3)).toBe(2);
    });

    test("should handle single break in perfect pattern", () => {
        expect(numberOfAlternatingGroups([0,1,0,1,1,0,1,0], 3)).toBe(4);
    });
});