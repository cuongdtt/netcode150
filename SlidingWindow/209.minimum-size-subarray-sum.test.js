const { minSubArrayLen } = require("./209.minimum-size-subarray-sum.js");

describe("Minimum Size Subarray Sum - README Examples", () => {
  test("target = 7, nums = [2,3,1,2,4,3] should return 2", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  });

  test("target = 4, nums = [1,4,4] should return 1", () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
  });

  test("target = 11, nums = [1,1,1,1,1,1,1,1] should return 0", () => {
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
  });
});

describe("Minimum Size Subarray Sum - Edge Cases", () => {
  test("single element array - target met", () => {
    expect(minSubArrayLen(5, [5])).toBe(1);
  });

  test("single element array - target not met", () => {
    expect(minSubArrayLen(10, [5])).toBe(0);
  });

  test("two element array - first element meets target", () => {
    expect(minSubArrayLen(3, [4, 2])).toBe(1);
  });

  test("two element array - need both elements", () => {
    expect(minSubArrayLen(6, [3, 4])).toBe(2);
  });

  test("all elements same value - target met", () => {
    expect(minSubArrayLen(6, [2, 2, 2, 2])).toBe(3);
  });
});

describe("Minimum Size Subarray Sum - Common Patterns", () => {
  test("increasing sequence", () => {
    expect(minSubArrayLen(10, [1, 2, 3, 4, 5])).toBe(3);
  });

  test("decreasing sequence", () => {
    expect(minSubArrayLen(10, [5, 4, 3, 2, 1])).toBe(3);
  });

  test("target equals single large element", () => {
    expect(minSubArrayLen(15, [1, 2, 15, 3, 4])).toBe(1);
  });

  test("alternating high-low pattern", () => {
    expect(minSubArrayLen(12, [1, 10, 1, 10, 1])).toBe(3);
  });

  test("multiple valid subarrays - find minimum", () => {
    expect(minSubArrayLen(7, [2, 1, 2, 4, 3, 1])).toBe(2);
  });
});

describe("Minimum Size Subarray Sum - Boundary Conditions", () => {
  test("target equals sum of entire array", () => {
    expect(minSubArrayLen(15, [1, 2, 3, 4, 5])).toBe(5);
  });

  test("target is 1 with minimum values", () => {
    expect(minSubArrayLen(1, [1, 1, 1])).toBe(1);
  });

  test("large target with small numbers", () => {
    expect(minSubArrayLen(100, [1, 1, 1, 1])).toBe(0);
  });

  test("minimum target with larger numbers", () => {
    expect(minSubArrayLen(1, [10, 20, 30])).toBe(1);
  });

  test("target larger than any single element but achievable", () => {
    expect(minSubArrayLen(8, [3, 3, 3, 3])).toBe(3);
  });
});

describe("Minimum Size Subarray Sum - Complex Scenarios", () => {
  test("mixed large and small values", () => {
    expect(minSubArrayLen(20, [1, 1, 1, 20, 1, 1, 1])).toBe(1);
  });

  test("plateau pattern with solution in middle", () => {
    expect(minSubArrayLen(15, [1, 1, 5, 5, 5, 1, 1])).toBe(3);
  });

  test("multiple peaks with optimal window", () => {
    expect(minSubArrayLen(12, [2, 8, 1, 9, 2, 3])).toBe(3);
  });

  test("single large element meets target", () => {
    expect(minSubArrayLen(10, [2, 2, 2, 2, 3, 100])).toBe(1);
  });

  test("no solution possible", () => {
    expect(minSubArrayLen(50, [1, 2, 3, 4, 5])).toBe(0);
  });
});
