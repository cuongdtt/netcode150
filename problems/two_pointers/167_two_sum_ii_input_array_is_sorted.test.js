const { twoSum } = require('./167_two_sum_ii_input_array_is_sorted.js');

describe('Two Sum II - Input Array Is Sorted - README Examples', () => {
    test('Example 1: [2,7,11,15], target = 9', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });

    test('Example 2: [2,3,4], target = 6', () => {
        expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    });

    test('Example 3: [-1,0], target = -1', () => {
        expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
    });
});

describe('Two Sum II - Input Array Is Sorted - Edge Cases', () => {
    test('Minimum array size with target sum', () => {
        expect(twoSum([1, 2], 3)).toEqual([1, 2]);
    });

    test('Two identical numbers', () => {
        expect(twoSum([3, 3], 6)).toEqual([1, 2]);
    });

    test('Adjacent numbers sum to target', () => {
        expect(twoSum([1, 3, 4, 5], 7)).toEqual([2, 3]);
    });

    test('First and last elements sum to target', () => {
        expect(twoSum([1, 2, 3, 4, 5], 6)).toEqual([1, 5]);
    });

    test('Negative numbers with positive target', () => {
        expect(twoSum([-3, -1, 0, 2, 5], 2)).toEqual([3, 4]);
    });
});

describe('Two Sum II - Input Array Is Sorted - Common Patterns', () => {
    test('Small positive target', () => {
        expect(twoSum([1, 2, 3, 4, 5, 6], 5)).toEqual([1, 4]);
    });

    test('Large numbers with medium target', () => {
        expect(twoSum([10, 20, 30, 40, 50], 60)).toEqual([2, 4]);
    });

    test('Mixed positive and negative numbers', () => {
        expect(twoSum([-10, -1, 0, 3, 5, 7], 8)).toEqual([4, 6]);
    });

    test('Zero as one of the numbers', () => {
        expect(twoSum([0, 1, 2, 3], 3)).toEqual([1, 4]);
    });

    test('All negative numbers', () => {
        expect(twoSum([-5, -3, -1], -6)).toEqual([1, 3]);
    });
});

describe('Two Sum II - Input Array Is Sorted - Boundary Conditions', () => {
    test('Large array with target at beginning', () => {
        const arr = Array.from({length: 100}, (_, i) => i + 1);
        expect(twoSum(arr, 3)).toEqual([1, 2]);
    });

    test('Large array with target at end', () => {
        const arr = Array.from({length: 100}, (_, i) => i + 1);
        expect(twoSum(arr, 199)).toEqual([99, 100]);
    });

    test('Many duplicate values', () => {
        expect(twoSum([1, 1, 1, 1, 2, 2, 2], 3)).toEqual([1, 5]);
    });

    test('Large target requiring distant indices', () => {
        expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19)).toEqual([9, 10]);
    });

    test('Maximum constraint values', () => {
        const largeArr = [-1000, 0, 1000];
        expect(twoSum(largeArr, 0)).toEqual([1, 3]);
    });
});

describe('Two Sum II - Input Array Is Sorted - Complex Scenarios', () => {
    test('Long sorted sequence with specific target', () => {
        const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        expect(twoSum(arr, 24)).toEqual([4, 8]);
    });

    test('Arithmetic progression with target', () => {
        const arr = [2, 4, 6, 8, 10, 12, 14, 16];
        expect(twoSum(arr, 18)).toEqual([1, 8]);
    });

    test('Powers of 2 with specific sum', () => {
        const arr = [1, 2, 4, 8, 16, 32];
        expect(twoSum(arr, 48)).toEqual([5, 6]);
    });

    test('Fibonacci-like sequence', () => {
        const arr = [1, 1, 2, 3, 5, 8, 13];
        expect(twoSum(arr, 16)).toEqual([3, 7]);
    });

    test('Large numbers with precise calculation', () => {
        const arr = [100, 200, 300, 400, 500, 600, 700];
        expect(twoSum(arr, 900)).toEqual([3, 6]);
    });
});