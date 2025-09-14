const { topKFrequent } = require("./347_top_k_frequent_elements.js");

describe("Top K Frequent Elements - README Examples", () => {
  test("should return [1,2] for nums = [1,1,1,2,2,3], k = 2", () => {
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
    expect(result.sort()).toEqual([1, 2]);
  });

  test("should return [1] for nums = [1], k = 1", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });
});

describe("Top K Frequent Elements - Edge Cases", () => {
  test("should handle single element array", () => {
    expect(topKFrequent([5], 1)).toEqual([5]);
  });

  test("should handle two element array with same frequency", () => {
    const result = topKFrequent([1, 2], 2);
    expect(result.sort()).toEqual([1, 2]);
  });

  test("should handle two element array with different frequency", () => {
    expect(topKFrequent([1, 1], 1)).toEqual([1]);
  });

  test("should handle k = 1 (single most frequent)", () => {
    expect(topKFrequent([1, 1, 2, 2, 3], 1)).toEqual([1]);
  });

  test("should handle k equal to number of unique elements", () => {
    const result = topKFrequent([1, 2, 3], 3);
    expect(result.sort()).toEqual([1, 2, 3]);
  });

  test("should handle all same elements", () => {
    expect(topKFrequent([7, 7, 7, 7], 1)).toEqual([7]);
  });
});

describe("Top K Frequent Elements - Common Patterns", () => {
  test("should handle increasing frequency pattern", () => {
    // 1 appears 1 time, 2 appears 2 times, 3 appears 3 times
    const result = topKFrequent([1, 2, 2, 3, 3, 3], 2);
    expect(result.sort()).toEqual([2, 3]);
  });

  test("should handle decreasing frequency pattern", () => {
    // 1 appears 3 times, 2 appears 2 times, 3 appears 1 time
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
    expect(result.sort()).toEqual([1, 2]);
  });

  test("should handle mixed positive and negative numbers", () => {
    const result = topKFrequent([-1, -1, 2, 2, 2, 3], 2);
    expect(result.sort()).toEqual([-1, 2]);
  });

  test("should handle negative numbers only", () => {
    const result = topKFrequent([-5, -5, -3, -3, -3, -1], 2);
    expect(result.sort((a, b) => a - b)).toEqual([-5, -3]);
  });

  test("should handle zero values", () => {
    const result = topKFrequent([0, 0, 1, 1, 1, 2], 2);
    expect(result.sort()).toEqual([0, 1]);
  });

  test("should handle large frequency differences", () => {
    const nums = [1, ...Array(100).fill(2), 3, 3, 3];
    expect(topKFrequent(nums, 1)).toEqual([2]);
  });
});

describe("Top K Frequent Elements - Boundary Conditions", () => {
  test("should handle minimum array size", () => {
    expect(topKFrequent([42], 1)).toEqual([42]);
  });

  test("should handle minimum constraint values", () => {
    const result = topKFrequent([-10000, -10000, 10000], 2);
    expect(result.sort()).toEqual([-10000, 10000]);
  });

  test("should handle maximum constraint values", () => {
    const result = topKFrequent([9999, 9999, -9999], 2);
    expect(result.sort()).toEqual([-9999, 9999]);
  });

  test("should handle large array with many unique elements", () => {
    // Create array with 1000 unique elements, each appearing once
    const nums = Array.from({ length: 1000 }, (_, i) => i);
    const result = topKFrequent(nums, 5);
    expect(result.length).toBe(5);
    // All elements have same frequency, so any 5 elements are valid
    result.forEach((num) => expect(nums).toContain(num));
  });

  test("should handle large array with few unique elements", () => {
    // Create array where 1 appears 500 times, 2 appears 300 times, 3 appears 200 times
    const nums = [
      ...Array(500).fill(1),
      ...Array(300).fill(2),
      ...Array(200).fill(3),
    ];
    const result = topKFrequent(nums, 2);
    expect(result.sort()).toEqual([1, 2]);
  });

  test("should handle k at maximum (all unique elements)", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = topKFrequent(nums, 5);
    expect(result.sort()).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Top K Frequent Elements - Complex Scenarios", () => {
  test("should handle equal frequencies with tie-breaking", () => {
    // All elements appear twice - any k elements are valid
    const result = topKFrequent([1, 1, 2, 2, 3, 3, 4, 4], 2);
    expect(result.length).toBe(2);
    result.forEach((num) => expect([1, 2, 3, 4]).toContain(num));
  });

  test("should handle alternating pattern", () => {
    const result = topKFrequent([1, 2, 1, 3, 1, 4, 1], 2);
    expect(result.sort()).toEqual([1, 2]); // 1 appears 4 times, others appear 1 time each
  });

  test("should handle clustered elements", () => {
    const nums = [1, 1, 1, 2, 2, 2, 3, 3, 4];
    const result = topKFrequent(nums, 3);
    expect(result.sort()).toEqual([1, 2, 3]);
  });

  test("should handle sparse frequency distribution", () => {
    // 1 appears 10 times, 2 appears 1 time, 3 appears 1 time, ..., 11 appears 1 time
    const nums = [...Array(10).fill(1), 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(topKFrequent(nums, 1)).toEqual([1]);
  });

  test("should handle fibonacci-like frequencies", () => {
    // Create pattern where frequencies follow: 1, 1, 2, 3, 5
    const nums = [
      5, // appears 1 time
      4, // appears 1 time
      3,
      3, // appears 2 times
      2,
      2,
      2, // appears 3 times
      1,
      1,
      1,
      1,
      1, // appears 5 times
    ];
    const result = topKFrequent(nums, 3);
    expect(result.sort()).toEqual([1, 2, 3]);
  });

  test("should handle power-of-2 frequencies", () => {
    const nums = [
      ...Array(1).fill(4), // 4 appears 1 time
      ...Array(2).fill(3), // 3 appears 2 times
      ...Array(4).fill(2), // 2 appears 4 times
      ...Array(8).fill(1), // 1 appears 8 times
    ];
    const result = topKFrequent(nums, 2);
    expect(result.sort()).toEqual([1, 2]);
  });

  test("should handle maximum array size scenario", () => {
    // Simulate large array with distinct frequency pattern
    const nums = [
      ...Array(1000).fill(1), // Most frequent
      ...Array(500).fill(2), // Second most frequent
      ...Array(250).fill(3), // Third most frequent
      4,
      5,
      6,
      7,
      8,
      9,
      10, // Each appears once
    ];
    const result = topKFrequent(nums, 3);
    expect(result.sort()).toEqual([1, 2, 3]);
  });

  test("should handle edge case with many elements same frequency", () => {
    // 100 unique elements, each appearing exactly twice
    const nums = [];
    for (let i = 1; i <= 100; i++) {
      nums.push(i, i);
    }
    const result = topKFrequent(nums, 5);
    expect(result.length).toBe(5);
    // All have same frequency, so any 5 elements from 1-100 are valid
    result.forEach((num) => expect(num).toBeGreaterThanOrEqual(1));
    result.forEach((num) => expect(num).toBeLessThanOrEqual(100));
  });
});

describe("Top K Frequent Elements - User input scenarios", () => {
  // Empty for user-specific test cases
});
