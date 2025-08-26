const { minimumRecolors } = require('./2379_minimum_recolors_to_get_k_consecutive_black_blocks.js');

describe("Minimum Recolors to Get K Consecutive Black Blocks - README Examples", () => {
    test('should return 3 for blocks = "WBBWWBBWBW", k = 7', () => {
        expect(minimumRecolors("WBBWWBBWBW", 7)).toBe(3);
    });

    test('should return 0 for blocks = "WBWBBBW", k = 2', () => {
        expect(minimumRecolors("WBWBBBW", 2)).toBe(0);
    });
});

describe("Minimum Recolors to Get K Consecutive Black Blocks - Edge Cases", () => {
    test("should handle k = 1", () => {
        expect(minimumRecolors("B", 1)).toBe(0);
        expect(minimumRecolors("W", 1)).toBe(1);
        expect(minimumRecolors("BWB", 1)).toBe(0);
    });

    test("should handle k equal to string length", () => {
        expect(minimumRecolors("BBB", 3)).toBe(0);
        expect(minimumRecolors("WWW", 3)).toBe(3);
        expect(minimumRecolors("BWB", 3)).toBe(1);
    });

    test("should handle all black blocks", () => {
        expect(minimumRecolors("BBBB", 2)).toBe(0);
        expect(minimumRecolors("BBBBB", 3)).toBe(0);
    });

    test("should handle all white blocks", () => {
        expect(minimumRecolors("WWWW", 2)).toBe(2);
        expect(minimumRecolors("WWWWW", 3)).toBe(3);
    });
});

describe("Minimum Recolors to Get K Consecutive Black Blocks - Common Patterns", () => {
    test("should handle alternating pattern", () => {
        expect(minimumRecolors("BWBWBW", 2)).toBe(1);
        expect(minimumRecolors("WBWBWB", 3)).toBe(2);
    });

    test("should handle blocks with consecutive blacks", () => {
        expect(minimumRecolors("WBBBW", 3)).toBe(0);
        expect(minimumRecolors("WBBBW", 4)).toBe(1);
    });

    test("should handle blocks with consecutive whites", () => {
        expect(minimumRecolors("BWWWB", 3)).toBe(3);
        expect(minimumRecolors("BWWWB", 2)).toBe(2);
    });

    test("should find optimal window", () => {
        expect(minimumRecolors("WBBWBB", 4)).toBe(1);
        expect(minimumRecolors("BWWBBW", 3)).toBe(1);
    });
});

describe("Minimum Recolors to Get K Consecutive Black Blocks - Boundary Conditions", () => {
    test("should handle single character", () => {
        expect(minimumRecolors("B", 1)).toBe(0);
        expect(minimumRecolors("W", 1)).toBe(1);
    });

    test("should handle long strings", () => {
        const longString = "W".repeat(50) + "B".repeat(50);
        expect(minimumRecolors(longString, 10)).toBe(0);
        expect(minimumRecolors(longString, 60)).toBe(10);
    });

    test("should handle existing consecutive k blacks", () => {
        expect(minimumRecolors("WBBBW", 3)).toBe(0);
        expect(minimumRecolors("BBBBW", 4)).toBe(0);
    });
});

describe("Minimum Recolors to Get K Consecutive Black Blocks - Complex Scenarios", () => {
    test("should handle multiple possible windows", () => {
        expect(minimumRecolors("WBBWBBBW", 4)).toBe(1);
        expect(minimumRecolors("BWBWBWB", 3)).toBe(2);
    });

    test("should handle optimal window at start", () => {
        expect(minimumRecolors("BBBWWW", 3)).toBe(0);
        expect(minimumRecolors("WWWBBB", 3)).toBe(3);
    });

    test("should handle optimal window at end", () => {
        expect(minimumRecolors("WWWBBB", 3)).toBe(0);
        expect(minimumRecolors("BBBWWW", 3)).toBe(3);
    });

    test("should handle mixed patterns with gaps", () => {
        expect(minimumRecolors("BWWBWWBWWB", 4)).toBe(2);
    });

    test("should handle overlapping good windows", () => {
        expect(minimumRecolors("WBBBBB", 3)).toBe(0);
        expect(minimumRecolors("WBBBBB", 4)).toBe(0);
    });

    test("should handle scattered black blocks", () => {
        expect(minimumRecolors("BWBWBWB", 4)).toBe(1);
        expect(minimumRecolors("BWWBWWB", 5)).toBe(2);
    });

    test("should handle case where recoloring creates optimal window", () => {
        expect(minimumRecolors("WWBBWWBB", 6)).toBe(2);
    });
});