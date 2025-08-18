const { findMaxAverage } = require("./643.maximum-average-subarray-i.js");

describe("Maximum Average Subarray I - README Examples", () => {
  test("nums = [1,12,-5,-6,50,3], k = 4 should return 12.75", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75);
  });

  test("nums = [5], k = 1 should return 5.0", () => {
    expect(findMaxAverage([5], 1)).toBeCloseTo(5.0);
  });
});

describe("Maximum Average Subarray I - Edge Cases", () => {
  test("single element array", () => {
    expect(findMaxAverage([10], 1)).toBeCloseTo(10.0);
  });

  test("two element array, k = 1", () => {
    expect(findMaxAverage([3, 7], 1)).toBeCloseTo(7.0);
  });

  test("two element array, k = 2", () => {
    expect(findMaxAverage([3, 7], 2)).toBeCloseTo(5.0);
  });

  test("all negative numbers", () => {
    expect(findMaxAverage([-1, -2, -3, -4], 2)).toBeCloseTo(-1.5);
  });

  test("all same numbers", () => {
    expect(findMaxAverage([5, 5, 5, 5], 3)).toBeCloseTo(5.0);
  });
});

describe("Maximum Average Subarray I - Common Patterns", () => {
  test("increasing sequence", () => {
    expect(findMaxAverage([1, 2, 3, 4, 5], 3)).toBeCloseTo(4.0);
  });

  test("decreasing sequence", () => {
    expect(findMaxAverage([5, 4, 3, 2, 1], 3)).toBeCloseTo(4.0);
  });

  test("mixed positive and negative", () => {
    expect(findMaxAverage([1, -1, 0, 3, -2], 2)).toBeCloseTo(1.5);
  });

  test("large positive spike", () => {
    expect(findMaxAverage([1, 1, 100, 1, 1], 3)).toBeCloseTo(34.0);
  });

  test("alternating pattern", () => {
    expect(findMaxAverage([1, 10, 2, 9, 3], 2)).toBeCloseTo(6.0);
  });
});

describe("Maximum Average Subarray I - Boundary Conditions", () => {
  test("k equals array length", () => {
    expect(findMaxAverage([1, 2, 3, 4], 4)).toBeCloseTo(2.5);
  });

  test("minimum values with k = 1", () => {
    expect(findMaxAverage([-104, -103], 1)).toBeCloseTo(-103.0);
  });

  test("maximum values with k = 1", () => {
    expect(findMaxAverage([103, 104], 1)).toBeCloseTo(104.0);
  });

  test("zero values", () => {
    expect(findMaxAverage([0, 0, 0, 0], 2)).toBeCloseTo(0.0);
  });

  test("precision test with decimals", () => {
    expect(findMaxAverage([1, 2], 2)).toBeCloseTo(1.5);
  });
});

describe("Maximum Average Subarray I - Complex Scenarios", () => {
  test("large array with mixed values", () => {
    expect(findMaxAverage([1, -1, 0, 2, -2, 3, -3, 4], 4)).toBeCloseTo(0.75);
  });

  test("multiple equal maximum averages", () => {
    expect(findMaxAverage([1, 3, 2, 4], 2)).toBeCloseTo(3.0);
  });

  test("negative and positive extremes", () => {
    expect(findMaxAverage([-104, 104, -104, 104], 2)).toBeCloseTo(0.0);
  });

  test("plateau pattern in middle", () => {
    expect(findMaxAverage([1, 10, 10, 10, 1], 3)).toBeCloseTo(10.0);
  });

  test("gradual increase to maximum", () => {
    expect(findMaxAverage([1, 2, 3, 4, 5, 6, 7], 3)).toBeCloseTo(6.0);
  });
});
