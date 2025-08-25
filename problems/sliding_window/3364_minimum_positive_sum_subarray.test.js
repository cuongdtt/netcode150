const {
  minimumSumSubarray,
  minimumSumSubarrayOptimized,
} = require("./3364_minimum_positive_sum_subarray.js");

describe("Minimum Positive Sum Subarray - README Examples", () => {
  test("nums = [3, -2, 1, 4], l = 2, r = 3 should return 1", () => {
    expect(minimumSumSubarray([3, -2, 1, 4], 2, 3)).toBe(1);
  });

  test("nums = [-2, 2, -3, 1], l = 2, r = 3 should return -1", () => {
    expect(minimumSumSubarray([-2, 2, -3, 1], 2, 3)).toBe(-1);
  });

  test("nums = [1, 2, 3, 4], l = 2, r = 4 should return 3", () => {
    expect(minimumSumSubarray([1, 2, 3, 4], 2, 4)).toBe(3);
  });
});

describe("Minimum Positive Sum Subarray - Edge Cases", () => {
  test("single element array with positive value", () => {
    expect(minimumSumSubarray([5], 1, 1)).toBe(5);
  });

  test("single element array with negative value", () => {
    expect(minimumSumSubarray([-5], 1, 1)).toBe(-1);
  });

  test("two element array, l = r = 1", () => {
    expect(minimumSumSubarray([3, -2], 1, 1)).toBe(3);
  });

  test("two element array, l = r = 2", () => {
    expect(minimumSumSubarray([3, -2], 2, 2)).toBe(1);
  });

  test("all negative numbers", () => {
    expect(minimumSumSubarray([-1, -2, -3], 1, 2)).toBe(-1);
  });
});

describe("Minimum Positive Sum Subarray - Common Patterns", () => {
  test("all positive numbers", () => {
    expect(minimumSumSubarray([1, 2, 3, 4], 1, 2)).toBe(1);
  });

  test("mixed positive and negative", () => {
    expect(minimumSumSubarray([5, -3, 2, 1], 2, 3)).toBe(2);
  });

  test("positive at start", () => {
    expect(minimumSumSubarray([10, -5, -3, 2], 2, 3)).toBe(2);
  });

  test("positive at end", () => {
    expect(minimumSumSubarray([-3, -2, 4, 1], 2, 3)).toBe(2);
  });

  test("alternating pattern", () => {
    expect(minimumSumSubarray([1, -1, 2, -2, 3], 2, 3)).toBe(1);
  });
});

describe("Minimum Positive Sum Subarray - Boundary Conditions", () => {
  test("l = r = array length", () => {
    expect(minimumSumSubarray([1, 2, 3], 3, 3)).toBe(6);
  });

  test("minimum values with l = 1", () => {
    expect(minimumSumSubarray([-1000, 1], 1, 2)).toBe(1);
  });

  test("maximum values", () => {
    expect(minimumSumSubarray([1000, 1000], 1, 2)).toBe(1000);
  });

  test("zero values mixed", () => {
    expect(minimumSumSubarray([0, 1, 0], 2, 3)).toBe(1);
  });

  test("large range l to r", () => {
    expect(minimumSumSubarray([1, -2, 3, -1], 1, 4)).toBe(1);
  });
});

describe("Minimum Positive Sum Subarray - Complex Scenarios", () => {
  test("multiple valid subarrays with same minimum", () => {
    expect(minimumSumSubarray([2, -1, 2, -1], 2, 3)).toBe(1);
  });

  test("long array with mixed values", () => {
    expect(minimumSumSubarray([5, -4, 3, -2, 1, -1, 2], 3, 5)).toBe(1);
  });

  test("negative spike in middle", () => {
    expect(minimumSumSubarray([3, -10, 4, 2], 2, 3)).toBe(6);
  });

  test("gradual increase pattern", () => {
    expect(minimumSumSubarray([1, 2, 3, 4, 5], 2, 4)).toBe(3);
  });

  test("no positive sum possible", () => {
    expect(minimumSumSubarray([-5, -3, -1, -2], 2, 4)).toBe(-1);
  });
});

describe("Optimized Solution - Verification", () => {
  test("both solutions should give same results for README examples", () => {
    expect(minimumSumSubarray([3, -2, 1, 4], 2, 3)).toBe(
      minimumSumSubarrayOptimized([3, -2, 1, 4], 2, 3)
    );
    expect(minimumSumSubarray([-2, 2, -3, 1], 2, 3)).toBe(
      minimumSumSubarrayOptimized([-2, 2, -3, 1], 2, 3)
    );
    expect(minimumSumSubarray([1, 2, 3, 4], 2, 4)).toBe(
      minimumSumSubarrayOptimized([1, 2, 3, 4], 2, 4)
    );
  });

  test("both solutions should give same results for complex cases", () => {
    expect(minimumSumSubarray([5, -4, 3, -2, 1, -1, 2], 3, 5)).toBe(
      minimumSumSubarrayOptimized([5, -4, 3, -2, 1, -1, 2], 3, 5)
    );
    expect(minimumSumSubarray([10, -5, -3, 2], 2, 3)).toBe(
      minimumSumSubarrayOptimized([10, -5, -3, 2], 2, 3)
    );
    expect(minimumSumSubarray([-5, -3, -1, -2], 2, 4)).toBe(
      minimumSumSubarrayOptimized([-5, -3, -1, -2], 2, 4)
    );
  });
});

describe("Minimum Positive Sum Subarray - Performance Tests", () => {
  test("should return 8", () => {
    expect(minimumSumSubarray([-12, 8], 1, 1)).toBe(8);
  });
});
