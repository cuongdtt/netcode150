const { containsNearbyDuplicate } = require("./219.contains-duplicate-ii.js");

describe("Contains Duplicate II - README Examples", () => {
  test("Example 1: nums = [1,2,3,1], k = 3 should return true", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  });

  test("Example 2: nums = [1,0,1,1], k = 1 should return true", () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  });

  test("Example 3: nums = [1,2,3,1,2,3], k = 2 should return false", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });
});

describe("Contains Duplicate II - Edge Cases", () => {
  test("Single element array should return false", () => {
    expect(containsNearbyDuplicate([1], 1)).toBe(false);
  });

  test("Two identical elements within range should return true", () => {
    expect(containsNearbyDuplicate([1, 1], 1)).toBe(true);
  });

  test("Two identical elements outside range should return false", () => {
    expect(containsNearbyDuplicate([1, 2, 1], 1)).toBe(false);
  });

  test("All same values with k = 0 should return false", () => {
    expect(containsNearbyDuplicate([1, 1, 1], 0)).toBe(false);
  });

  test("All same values with k >= 1 should return true", () => {
    expect(containsNearbyDuplicate([2, 2, 2], 1)).toBe(true);
  });
});

describe("Contains Duplicate II - Common Patterns", () => {
  test("Increasing sequence with no duplicates should return false", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 5], 2)).toBe(false);
  });

  test("Decreasing sequence with no duplicates should return false", () => {
    expect(containsNearbyDuplicate([5, 4, 3, 2, 1], 3)).toBe(false);
  });

  test("Alternating pattern with duplicates in range should return true", () => {
    expect(containsNearbyDuplicate([1, 2, 1, 2], 2)).toBe(true);
  });

  test("Alternating pattern with duplicates outside range should return false", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 2)).toBe(false);
  });

  test("Peak pattern with duplicate at peak should return true", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 3, 2, 1], 1)).toBe(true);
  });
});

describe("Contains Duplicate II - Boundary Conditions", () => {
  test("Minimum array size with k = 0 should return false", () => {
    expect(containsNearbyDuplicate([1, 1], 0)).toBe(false);
  });

  test("Maximum negative values within range should return true", () => {
    expect(containsNearbyDuplicate([-1000000000, -1000000000], 1)).toBe(true);
  });

  test("Maximum positive values within range should return true", () => {
    expect(containsNearbyDuplicate([1000000000, 1000000000], 1)).toBe(true);
  });

  test("Zero values within range should return true", () => {
    expect(containsNearbyDuplicate([0, 1, 0], 2)).toBe(true);
  });

  test("Large k value with small array should return true for duplicates", () => {
    expect(containsNearbyDuplicate([1, 2, 1], 100000)).toBe(true);
  });
});

describe("Contains Duplicate II - Complex Scenarios", () => {
  test("Multiple duplicates with first pair in range should return true", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 4, 5, 2], 3)).toBe(true);
  });

  test("Multiple duplicates with no pairs in range should return false", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 1, 2], 3)).toBe(false);
  });

  test("Long array with duplicates at exact k distance should return true", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 1], 5)).toBe(true);
  });

  test("Long array with duplicates at k+1 distance should return false", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 1], 5)).toBe(false);
  });

  test("Stress test with multiple same values scattered should return true", () => {
    expect(containsNearbyDuplicate([7, 1, 3, 7, 2, 5, 7], 4)).toBe(true);
  });
});
