const { findClosestElements } = require("./658_find_k_closest_elements.js");

describe("Find K Closest Elements - README Examples", () => {
  test("should return [1,2,3,4] for arr = [1,2,3,4,5], k = 4, x = 3", () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4]);
  });

  test("should return [1,2,3,4] for arr = [1,2,3,4,5], k = 4, x = -1", () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4]);
  });
});

describe("Find K Closest Elements - Edge Cases", () => {
  test("should handle single element array", () => {
    expect(findClosestElements([1], 1, 1)).toEqual([1]);
    expect(findClosestElements([5], 1, 10)).toEqual([5]);
  });

  test("should handle k = 1", () => {
    expect(findClosestElements([1, 3, 5], 1, 2)).toEqual([1]);
    expect(findClosestElements([1, 3, 5], 1, 4)).toEqual([3]);
  });

  test("should handle k equal to array length", () => {
    expect(findClosestElements([1, 2, 3], 3, 2)).toEqual([1, 2, 3]);
    expect(findClosestElements([3, 4, 5], 3, 1)).toEqual([3, 4, 5]);
  });

  test("should handle x equal to array element", () => {
    expect(findClosestElements([1, 2, 3, 4], 2, 3)).toEqual([2, 3]);
    expect(findClosestElements([1, 2, 3, 4], 3, 2)).toEqual([1, 2, 3]);
  });
});

describe("Find K Closest Elements - Common Patterns", () => {
  test("should handle x smaller than all elements", () => {
    expect(findClosestElements([3, 5, 8, 10], 2, 1)).toEqual([3, 5]);
    expect(findClosestElements([10, 20, 30], 2, 5)).toEqual([10, 20]);
  });

  test("should handle x larger than all elements", () => {
    expect(findClosestElements([1, 3, 5, 7], 2, 10)).toEqual([5, 7]);
    expect(findClosestElements([1, 2, 3], 2, 100)).toEqual([2, 3]);
  });

  test("should handle duplicate elements", () => {
    expect(findClosestElements([1, 2, 2, 3, 4], 3, 2)).toEqual([1, 2, 2]);
    expect(findClosestElements([1, 1, 1, 2, 2], 3, 1)).toEqual([1, 1, 1]);
  });

  test("should handle negative numbers", () => {
    expect(findClosestElements([-5, -3, -1, 1, 3], 3, 0)).toEqual([-3, -1, 1]);
    expect(findClosestElements([-10, -5, 0, 5, 10], 2, -2)).toEqual([-5, 0]);
  });
});

describe("Find K Closest Elements - Boundary Conditions", () => {
  test("should handle two elements with same distance", () => {
    expect(findClosestElements([1, 3], 1, 2)).toEqual([1]);
    expect(findClosestElements([1, 4], 1, 2)).toEqual([1]);
  });

  test("should handle large arrays", () => {
    const arr = Array.from({ length: 100 }, (_, i) => i);
    expect(findClosestElements(arr, 5, 50)).toEqual([48, 49, 50, 51, 52]);
  });

  test("should handle extreme values", () => {
    expect(findClosestElements([1, 10000], 1, 5000)).toEqual([1]);
    expect(findClosestElements([-10000, 10000], 1, 0)).toEqual([-10000]);
  });

  test("should return elements in ascending order", () => {
    expect(findClosestElements([1, 3, 5, 7, 9], 3, 4)).toEqual([1, 3, 5]);
    expect(findClosestElements([2, 4, 6, 8, 10], 2, 5)).toEqual([4, 6]);
  });
});

describe("Find K Closest Elements - Complex Scenarios", () => {
  test("should handle mixed positive and negative with zero", () => {
    expect(findClosestElements([-2, -1, 0, 1, 2], 3, 0)).toEqual([-1, 0, 1]);
  });

  test("should handle optimal window in middle", () => {
    expect(findClosestElements([1, 5, 10, 15, 20], 3, 12)).toEqual([5, 10, 15]);
  });

  test("should handle tie-breaking correctly", () => {
    expect(findClosestElements([0, 1, 2, 3, 4], 2, 2)).toEqual([1, 2]);
    expect(findClosestElements([1, 2, 4, 5], 2, 3)).toEqual([2, 4]);
  });

  test("should handle sparse arrays", () => {
    expect(findClosestElements([1, 100, 200, 300], 2, 150)).toEqual([100, 200]);
  });

  test("should handle clustered elements", () => {
    expect(findClosestElements([1, 2, 3, 100, 101, 102], 3, 50)).toEqual([
      1, 2, 3,
    ]);
    expect(findClosestElements([1, 2, 3, 100, 101, 102], 3, 101)).toEqual([
      100, 101, 102,
    ]);
  });

  test("should handle edge selection", () => {
    expect(findClosestElements([1, 3, 5, 7, 9, 11], 4, 2)).toEqual([
      1, 3, 5, 7,
    ]);
    expect(findClosestElements([1, 3, 5, 7, 9, 11], 4, 10)).toEqual([
      5, 7, 9, 11,
    ]);
  });

  test("should handle fractional distances", () => {
    expect(findClosestElements([0, 1, 3, 4], 2, 2)).toEqual([1, 3]);
  });
});
