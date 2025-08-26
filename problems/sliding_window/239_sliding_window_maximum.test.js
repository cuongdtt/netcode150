const { maxSlidingWindow } = require('./239_sliding_window_maximum.js');

describe("Sliding Window Maximum - README Examples", () => {
    test("should return [3,3,5,5,6,7] for nums = [1,3,-1,-3,5,3,6,7], k = 3", () => {
        expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)).toEqual([3,3,5,5,6,7]);
    });

    test("should return [1] for nums = [1], k = 1", () => {
        expect(maxSlidingWindow([1], 1)).toEqual([1]);
    });
});

describe("Sliding Window Maximum - Edge Cases", () => {
    test("should handle single element array", () => {
        expect(maxSlidingWindow([5], 1)).toEqual([5]);
    });

    test("should handle window size equal to array length", () => {
        expect(maxSlidingWindow([1,3,5], 3)).toEqual([5]);
    });

    test("should handle two element array with k=1", () => {
        expect(maxSlidingWindow([1,2], 1)).toEqual([1,2]);
    });

    test("should handle two element array with k=2", () => {
        expect(maxSlidingWindow([1,2], 2)).toEqual([2]);
    });
});

describe("Sliding Window Maximum - Common Patterns", () => {
    test("should handle ascending array", () => {
        expect(maxSlidingWindow([1,2,3,4,5], 3)).toEqual([3,4,5]);
    });

    test("should handle descending array", () => {
        expect(maxSlidingWindow([5,4,3,2,1], 3)).toEqual([5,4,3]);
    });

    test("should handle array with duplicates", () => {
        expect(maxSlidingWindow([1,3,3,3,1], 3)).toEqual([3,3,3]);
    });

    test("should handle array with negative numbers", () => {
        expect(maxSlidingWindow([-1,-3,-2,-4,-5], 2)).toEqual([-1,-2,-2,-4]);
    });
});

describe("Sliding Window Maximum - Boundary Conditions", () => {
    test("should handle maximum values", () => {
        expect(maxSlidingWindow([10000,9999,9998], 2)).toEqual([10000,9999]);
    });

    test("should handle minimum values", () => {
        expect(maxSlidingWindow([-10000,-9999,-9998], 2)).toEqual([-9999,-9998]);
    });

    test("should handle large window size", () => {
        const nums = Array.from({length: 100}, (_, i) => i + 1);
        expect(maxSlidingWindow(nums, 50)).toHaveLength(51);
        expect(maxSlidingWindow(nums, 50)[0]).toBe(50);
        expect(maxSlidingWindow(nums, 50)[50]).toBe(100);
    });
});

describe("Sliding Window Maximum - Complex Scenarios", () => {
    test("should handle alternating high-low pattern", () => {
        expect(maxSlidingWindow([1,10,2,9,3,8,4], 3)).toEqual([10,10,9,9,8]);
    });

    test("should handle peaks and valleys", () => {
        expect(maxSlidingWindow([1,5,2,8,3,7,4], 3)).toEqual([5,8,8,8,7]);
    });

    test("should handle array with zeros", () => {
        expect(maxSlidingWindow([0,1,0,2,0], 3)).toEqual([1,2,2]);
    });

    test("should handle mixed positive and negative", () => {
        expect(maxSlidingWindow([-5,3,-2,4,-1], 3)).toEqual([3,4,4]);
    });

    test("should handle large array with small window", () => {
        const nums = [7,2,4,8,1,3,9,5,6];
        expect(maxSlidingWindow(nums, 2)).toEqual([7,4,8,8,3,9,9,6]);
    });
});