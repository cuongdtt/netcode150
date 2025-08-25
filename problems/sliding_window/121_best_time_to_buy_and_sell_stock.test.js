const { maxProfit } = require("./121_best_time_to_buy_and_sell_stock.js");

describe("Best Time to Buy and Sell Stock - README Examples", () => {
  test("Example 1: [7,1,5,3,6,4] should return 5", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test("Example 2: [7,6,4,3,1] should return 0", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});

describe("Best Time to Buy and Sell Stock - Edge Cases", () => {
  test("Single day - no profit possible", () => {
    expect(maxProfit([5])).toBe(0);
  });

  test("Two days - profit possible", () => {
    expect(maxProfit([1, 5])).toBe(4);
  });

  test("Two days - no profit", () => {
    expect(maxProfit([5, 1])).toBe(0);
  });

  test("Three days - profit on last day", () => {
    expect(maxProfit([3, 2, 6])).toBe(4);
  });

  test("Three days - profit on middle day", () => {
    expect(maxProfit([3, 6, 2])).toBe(3);
  });

  test("All same prices - no profit", () => {
    expect(maxProfit([5, 5, 5, 5])).toBe(0);
  });
});

describe("Best Time to Buy and Sell Stock - Price Patterns", () => {
  test("Increasing prices - max profit at end", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  test("Decreasing prices - no profit", () => {
    expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
  });

  test("Peak in middle", () => {
    expect(maxProfit([1, 2, 10, 3, 4])).toBe(9);
  });

  test("Multiple peaks - should choose highest", () => {
    expect(maxProfit([1, 5, 2, 8, 3, 10])).toBe(9);
  });

  test("Buy at first day, sell at last day", () => {
    expect(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(9);
  });

  test("Buy at last possible day", () => {
    expect(maxProfit([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(0);
  });
});

describe("Best Time to Buy and Sell Stock - Boundary Conditions", () => {
  test("Large numbers within constraints", () => {
    expect(maxProfit([10000, 20000, 15000, 25000])).toBe(15000);
  });

  test("Minimum array size (1 element)", () => {
    expect(maxProfit([100])).toBe(0);
  });

  test("Maximum array size test (small sample)", () => {
    const prices = Array.from({ length: 1000 }, (_, i) => i + 1);
    expect(maxProfit(prices)).toBe(999);
  });

  test("Zero prices", () => {
    expect(maxProfit([0, 0, 0, 0])).toBe(0);
  });

  test("Maximum price value (104)", () => {
    expect(maxProfit([1, 104, 50])).toBe(103);
  });
});

describe("Best Time to Buy and Sell Stock - Complex Scenarios", () => {
  test("Alternating high and low", () => {
    expect(maxProfit([1, 100, 1, 100, 1, 100])).toBe(99);
  });

  test("Steep drop then recovery", () => {
    expect(maxProfit([100, 1, 50, 25, 75])).toBe(74);
  });

  test("Plateau then drop", () => {
    expect(maxProfit([10, 10, 10, 5, 5, 5])).toBe(0);
  });

  test("Plateau then rise", () => {
    expect(maxProfit([5, 5, 5, 10, 10, 10])).toBe(5);
  });
});
