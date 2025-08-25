const {
  maxSubarrayLength,
} = require("./3411_maximum_subarray_with_equal_products.js");

describe("Maximum Subarray with Equal Products - README Examples", () => {
  test("nums = [1,2,1,2,1,1,1] should return 5", () => {
    expect(maxSubarrayLength([1, 2, 1, 2, 1, 1, 1])).toBe(5);
  });

  test("nums = [2,3,4,5,6] should return 3", () => {
    expect(maxSubarrayLength([2, 3, 4, 5, 6])).toBe(3);
  });

  test("nums = [1,2,3,1,4,5,1] should return 5", () => {
    expect(maxSubarrayLength([1, 2, 3, 1, 4, 5, 1])).toBe(5);
  });
});

describe("Maximum Subarray with Equal Products - Edge Cases", () => {
  test("two element array with same values", () => {
    expect(maxSubarrayLength([2, 2])).toBe(2);
  });

  test("two element array with different values", () => {
    expect(maxSubarrayLength([2, 3])).toBe(2);
  });

  test("all same values", () => {
    expect(maxSubarrayLength([1, 1, 1, 1])).toBe(4);
  });

  test("minimum array size", () => {
    expect(maxSubarrayLength([5, 7])).toBe(2);
  });

  test("array with only 1s", () => {
    expect(maxSubarrayLength([1, 1, 1, 1, 1])).toBe(5);
  });
});

describe("Maximum Subarray with Equal Products - Common Patterns", () => {
  test("increasing sequence", () => {
    expect(maxSubarrayLength([1, 2, 3, 4, 5])).toBe(3);
  });

  test("decreasing sequence", () => {
    expect(maxSubarrayLength([5, 4, 3, 2, 1])).toBe(3);
  });

  test("alternating pattern with 1s and 2s", () => {
    expect(maxSubarrayLength([1, 2, 1, 2, 1])).toBe(5);
  });

  test("mixed small numbers", () => {
    expect(maxSubarrayLength([2, 4, 2, 4])).toBe(2);
  });

  test("pattern with consecutive numbers", () => {
    expect(maxSubarrayLength([3, 4, 5, 6])).toBe(3);
  });
});

describe("Maximum Subarray with Equal Products - Boundary Conditions", () => {
  test("maximum values in constraints", () => {
    expect(maxSubarrayLength([10, 9, 8, 7, 6])).toBe(3);
  });

  test("minimum values in constraints", () => {
    expect(maxSubarrayLength([1, 1, 2, 1, 1])).toBe(5);
  });

  test("array with all different prime numbers", () => {
    expect(maxSubarrayLength([2, 3, 5, 7])).toBe(2);
  });

  test("array with powers of 2", () => {
    expect(maxSubarrayLength([2, 4, 8, 2])).toBe(2);
  });

  test("mixed 1s and other numbers", () => {
    expect(maxSubarrayLength([1, 3, 1, 5, 1])).toBe(3);
  });
});

describe("Maximum Subarray with Equal Products - Complex Scenarios", () => {
  test("long array with multiple valid subarrays", () => {
    expect(maxSubarrayLength([1, 2, 3, 1, 1, 4, 5, 1, 1])).toBe(5);
  });

  test("array with repeated patterns", () => {
    expect(maxSubarrayLength([2, 3, 2, 3, 2, 3])).toBe(2);
  });

  test("complex mix with multiple lengths", () => {
    expect(maxSubarrayLength([1, 6, 2, 3, 1, 1, 7, 8])).toBe(4);
  });

  test("array with composite numbers", () => {
    expect(maxSubarrayLength([4, 6, 8, 9, 10])).toBe(3);
  });

  test("stress test with maximum length", () => {
    const nums = Array(100).fill(1);
    expect(maxSubarrayLength(nums)).toBe(100);
  });

  test("alternating 1s with different numbers", () => {
    expect(maxSubarrayLength([1, 5, 1, 7, 1, 9, 1])).toBe(3);
  });

  test("product equivalent subarray in middle", () => {
    expect(maxSubarrayLength([10, 3, 4, 5, 10])).toBe(3);
  });

  test("multiple small product equivalent subarrays", () => {
    expect(maxSubarrayLength([2, 3, 5, 7, 2, 3])).toBe(2);
  });
});
