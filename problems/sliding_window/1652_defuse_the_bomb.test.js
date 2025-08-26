const { decrypt } = require('./1652_defuse_the_bomb.js');

describe("Defuse the Bomb - README Examples", () => {
    test("should return [12,10,16,13] for code = [5,7,1,4], k = 3", () => {
        expect(decrypt([5,7,1,4], 3)).toEqual([12,10,16,13]);
    });

    test("should return [0,0,0,0] for code = [1,2,3,4], k = 0", () => {
        expect(decrypt([1,2,3,4], 0)).toEqual([0,0,0,0]);
    });

    test("should return [12,5,6,13] for code = [2,4,9,3], k = -2", () => {
        expect(decrypt([2,4,9,3], -2)).toEqual([12,5,6,13]);
    });
});

describe("Defuse the Bomb - Edge Cases", () => {
    test("should handle single element array", () => {
        expect(decrypt([5], 0)).toEqual([0]);
        expect(decrypt([5], 1)).toEqual([5]);
        expect(decrypt([5], -1)).toEqual([5]);
    });

    test("should handle two element array", () => {
        expect(decrypt([1,2], 1)).toEqual([2,1]);
        expect(decrypt([1,2], -1)).toEqual([2,1]);
        expect(decrypt([1,2], 0)).toEqual([0,0]);
    });

    test("should handle k = 0", () => {
        expect(decrypt([1,2,3], 0)).toEqual([0,0,0]);
        expect(decrypt([10,5,7,9], 0)).toEqual([0,0,0,0]);
    });
});

describe("Defuse the Bomb - Common Patterns", () => {
    test("should handle positive k", () => {
        expect(decrypt([1,2,3,4], 1)).toEqual([2,3,4,1]);
        expect(decrypt([1,2,3,4], 2)).toEqual([5,7,5,3]);
    });

    test("should handle negative k", () => {
        expect(decrypt([1,2,3,4], -1)).toEqual([4,1,2,3]);
        expect(decrypt([1,2,3,4], -2)).toEqual([7,5,3,5]);
    });

    test("should handle circular wrapping", () => {
        expect(decrypt([2,4,9,3], 2)).toEqual([13,12,5,6]);
        expect(decrypt([2,4,9,3], -3)).toEqual([16,14,9,15]);
    });
});

describe("Defuse the Bomb - Boundary Conditions", () => {
    test("should handle k equal to array length", () => {
        expect(decrypt([1,2,3], 3)).toEqual([6,6,6]);
        expect(decrypt([1,2,3], -3)).toEqual([6,6,6]);
    });

    test("should handle k greater than array length", () => {
        expect(decrypt([1,2], 5)).toEqual([9,9]);
        expect(decrypt([1,2], -5)).toEqual([9,9]);
    });

    test("should handle large values", () => {
        expect(decrypt([100,200,300], 1)).toEqual([200,300,100]);
        expect(decrypt([100,200,300], -1)).toEqual([300,100,200]);
    });
});

describe("Defuse the Bomb - Complex Scenarios", () => {
    test("should handle mixed positive and negative values", () => {
        expect(decrypt([-1,2,-3,4], 2)).toEqual([1,1,1,1]);
        expect(decrypt([-1,2,-3,4], -2)).toEqual([1,1,1,1]);
    });

    test("should handle longer arrays", () => {
        const code = [1,2,3,4,5,6];
        expect(decrypt(code, 3)).toEqual([9,12,15,18,12,9]);
        expect(decrypt(code, -3)).toEqual([15,12,9,18,15,12]);
    });

    test("should handle zeros in array", () => {
        expect(decrypt([0,1,0,2], 2)).toEqual([1,2,2,1]);
        expect(decrypt([0,1,0,2], -2)).toEqual([3,2,1,1]);
    });

    test("should handle all same values", () => {
        expect(decrypt([5,5,5,5], 2)).toEqual([10,10,10,10]);
        expect(decrypt([5,5,5,5], -2)).toEqual([10,10,10,10]);
    });
});