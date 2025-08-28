const {
  characterReplacement,
} = require("./424_longest_repeating_character_replacement.js");

describe("Longest Repeating Character Replacement - README Examples", () => {
  test("Example 1: ABAB with k=2", () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
  });

  test("Example 2: AABABBA with k=1", () => {
    expect(characterReplacement("AABABBA", 1)).toBe(4);
  });
});

describe("Longest Repeating Character Replacement - Edge Cases", () => {
  test("Single character string", () => {
    expect(characterReplacement("A", 0)).toBe(1);
  });

  test("All same characters", () => {
    expect(characterReplacement("AAAA", 0)).toBe(4);
  });

  test("All same characters with k=1", () => {
    expect(characterReplacement("AAAA", 1)).toBe(4);
  });

  test("Two different characters", () => {
    expect(characterReplacement("AB", 1)).toBe(2);
  });

  test("Empty string (edge case)", () => {
    expect(characterReplacement("", 0)).toBe(0);
  });
});

describe("Longest Repeating Character Replacement - Common Patterns", () => {
  test("Alternating pattern with k=1", () => {
    expect(characterReplacement("ABABAB", 1)).toBe(3);
  });

  test("Alternating pattern with k=2", () => {
    expect(characterReplacement("ABABAB", 2)).toBe(5);
  });

  test("Repeating pattern with gaps", () => {
    expect(characterReplacement("AABBBCC", 1)).toBe(4);
  });

  test("Increasing frequency pattern", () => {
    expect(characterReplacement("ABCDEF", 3)).toBe(4);
  });

  test("Decreasing frequency pattern", () => {
    expect(characterReplacement("AAAAABBBCC", 2)).toBe(7);
  });
});

describe("Longest Repeating Character Replacement - Boundary Conditions", () => {
  test("Minimum string length", () => {
    expect(characterReplacement("A", 0)).toBe(1);
  });

  test("Maximum k value (equal to string length)", () => {
    expect(characterReplacement("ABC", 3)).toBe(3);
  });

  test("Zero k value", () => {
    expect(characterReplacement("AABABBA", 0)).toBe(2);
  });

  test("k larger than string length", () => {
    expect(characterReplacement("AB", 5)).toBe(2);
  });

  test("Minimum k value", () => {
    expect(characterReplacement("AAAA", 0)).toBe(4);
  });
});

describe("Longest Repeating Character Replacement - Complex Scenarios", () => {
  test("Multiple character frequencies", () => {
    expect(characterReplacement("AABABBA", 2)).toBe(5);
  });

  test("Long string with mixed patterns", () => {
    expect(characterReplacement("AABABBAABABBA", 2)).toBe(5);
  });

  test("Stress test with many different characters", () => {
    expect(characterReplacement("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5)).toBe(6);
  });

  test("Complex pattern with optimal replacement", () => {
    expect(characterReplacement("AABABBAABABBA", 1)).toBe(4);
  });

  test("All characters different with limited k", () => {
    expect(characterReplacement("ABCDEF", 2)).toBe(3);
  });
});
