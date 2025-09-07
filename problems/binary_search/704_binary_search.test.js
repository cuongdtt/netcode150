const { search } = require("./704_binary_search.js");

describe("Binary Search - README Examples", () => {
  test("should return 4 for nums = [-1,0,3,5,9,12], target = 9", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test("should return -1 for nums = [-1,0,3,5,9,12], target = 2", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });
});

describe("Binary Search - Edge Cases", () => {
  test("should handle single element array - target found", () => {
    expect(search([5], 5)).toBe(0);
  });

  test("should handle single element array - target not found", () => {
    expect(search([5], 3)).toBe(-1);
  });

  test("should handle two element array - target at first position", () => {
    expect(search([1, 3], 1)).toBe(0);
  });

  test("should handle two element array - target at second position", () => {
    expect(search([1, 3], 3)).toBe(1);
  });

  test("should handle two element array - target not found", () => {
    expect(search([1, 3], 2)).toBe(-1);
  });

  test("should handle all same values (but constraint says unique)", () => {
    expect(search([7], 7)).toBe(0);
  });
});

describe("Binary Search - Common Patterns", () => {
  test("should handle target at beginning of array", () => {
    expect(search([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  test("should handle target at end of array", () => {
    expect(search([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test("should handle target in middle of array", () => {
    expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test("should handle target smaller than all elements", () => {
    expect(search([2, 4, 6, 8, 10], 1)).toBe(-1);
  });

  test("should handle target larger than all elements", () => {
    expect(search([2, 4, 6, 8, 10], 12)).toBe(-1);
  });

  test("should handle negative numbers", () => {
    expect(search([-10, -5, -1, 0, 3, 7], -5)).toBe(1);
    expect(search([-10, -5, -1, 0, 3, 7], 0)).toBe(3);
  });
});

describe("Binary Search - Boundary Conditions", () => {
  test("should handle minimum array size (1 element)", () => {
    expect(search([42], 42)).toBe(0);
    expect(search([42], 41)).toBe(-1);
  });

  test("should handle large array with target found", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i * 2); // [0,2,4,6,8,...]
    expect(search(arr, 500)).toBe(250); // 500 is at index 250
  });

  test("should handle large array with target not found", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i * 2); // [0,2,4,6,8,...]
    expect(search(arr, 501)).toBe(-1); // 501 (odd number) not in array
  });

  test("should handle minimum constraint values", () => {
    expect(search([-10000], -10000)).toBe(0);
    expect(search([-10000, 10000], 10000)).toBe(1);
  });

  test("should handle maximum constraint values", () => {
    expect(search([9999], 9999)).toBe(0);
    expect(search([-9999, 9999], 9999)).toBe(1);
  });

  test("should handle zero values", () => {
    expect(search([-5, 0, 5], 0)).toBe(1);
    expect(search([0], 0)).toBe(0);
  });
});

describe("Binary Search - Complex Scenarios", () => {
  test("should handle sparse arrays with large gaps", () => {
    expect(search([1, 100, 200, 300, 400], 200)).toBe(2);
    expect(search([1, 100, 200, 300, 400], 150)).toBe(-1);
  });

  test("should handle arrays with negative and positive numbers", () => {
    expect(search([-100, -50, -10, 0, 10, 50, 100], -10)).toBe(2);
    expect(search([-100, -50, -10, 0, 10, 50, 100], 25)).toBe(-1);
  });

  test("should handle sequential numbers", () => {
    const sequential = Array.from({ length: 100 }, (_, i) => i + 1); // [1,2,3,...,100]
    expect(search(sequential, 50)).toBe(49);
    expect(search(sequential, 101)).toBe(-1);
  });

  test("should handle powers of 2", () => {
    const powers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
    expect(search(powers, 64)).toBe(6);
    expect(search(powers, 63)).toBe(-1);
  });

  test("should handle fibonacci-like sequence", () => {
    const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]; // Note: constraint says unique, so this violates it
    // Using modified sequence without duplicates
    const uniqueFib = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    expect(search(uniqueFib, 21)).toBe(6);
    expect(search(uniqueFib, 22)).toBe(-1);
  });

  test("should handle edge cases near boundaries", () => {
    expect(search([1, 3, 5, 7, 9], 0)).toBe(-1); // Just below minimum
    expect(search([1, 3, 5, 7, 9], 10)).toBe(-1); // Just above maximum
    expect(search([1, 3, 5, 7, 9], 2)).toBe(-1); // Between first two elements
    expect(search([1, 3, 5, 7, 9], 8)).toBe(-1); // Between last two elements
  });

  test("should handle maximum array size scenario", () => {
    // Simulating near-maximum constraint (10^4 elements)
    const largeArray = Array.from({ length: 1000 }, (_, i) => i * 10);
    expect(search(largeArray, 5000)).toBe(500);
    expect(search(largeArray, 5001)).toBe(-1);
  });
});

describe("Binary Search - User input scenarios", () => {
  // Empty for user-specific test cases
});
