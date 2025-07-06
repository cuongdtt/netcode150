const {
  lengthOfLongestSubstring,
} = require("./3.longest-substring-without-repeating-characters.js");

describe("Longest Substring Without Repeating Characters - README Examples", () => {
  test('Example 1: "abcabcbb" should return 3', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  test('Example 2: "bbbbb" should return 1', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  test('Example 3: "pwwkew" should return 3', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
});

describe("Longest Substring Without Repeating Characters - Edge Cases", () => {
  test("Empty string should return 0", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  test("Single character should return 1", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });

  test("Two different characters should return 2", () => {
    expect(lengthOfLongestSubstring("ab")).toBe(2);
  });

  test("Two same characters should return 1", () => {
    expect(lengthOfLongestSubstring("aa")).toBe(1);
  });

  test("All same characters should return 1", () => {
    expect(lengthOfLongestSubstring("aaaaa")).toBe(1);
  });
});

describe("Longest Substring Without Repeating Characters - Common Patterns", () => {
  test('Increasing pattern: "abcdef" should return 6', () => {
    expect(lengthOfLongestSubstring("abcdef")).toBe(6);
  });

  test('Alternating pattern: "ababab" should return 2', () => {
    expect(lengthOfLongestSubstring("ababab")).toBe(2);
  });

  test('Palindrome pattern: "racecar" should return 4', () => {
    expect(lengthOfLongestSubstring("racecar")).toBe(4);
  });

  test('Repeating pattern: "abcabcabc" should return 3', () => {
    expect(lengthOfLongestSubstring("abcabcabc")).toBe(3);
  });

  test('Peak pattern: "abcdcba" should return 4', () => {
    expect(lengthOfLongestSubstring("abcdcba")).toBe(4);
  });
});

describe("Longest Substring Without Repeating Characters - Boundary Conditions", () => {
  test("Minimum length string should return correct value", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });

  test("String with spaces should handle correctly", () => {
    expect(lengthOfLongestSubstring("a b c")).toBe(3);
  });

  test("String with digits should handle correctly", () => {
    expect(lengthOfLongestSubstring("123123")).toBe(3);
  });

  test("String with symbols should handle correctly", () => {
    expect(lengthOfLongestSubstring("!@#$%")).toBe(5);
  });

  test("Mixed characters should handle correctly", () => {
    expect(lengthOfLongestSubstring("a1b2c3")).toBe(6);
  });
});

describe("Longest Substring Without Repeating Characters - Complex Scenarios", () => {
  test('Complex scenario 1: "dvdf" should return 3', () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });

  test('Complex scenario 2: "anviaj" should return 5', () => {
    expect(lengthOfLongestSubstring("anviaj")).toBe(5);
  });

  test('Complex scenario 3: "qrsvbspk" should return 5', () => {
    expect(lengthOfLongestSubstring("qrsvbspk")).toBe(5);
  });

  test('Complex scenario 4: "ckilbkd" should return 5', () => {
    expect(lengthOfLongestSubstring("ckilbkd")).toBe(5);
  });

  test('Complex scenario 5: "aab" should return 2', () => {
    expect(lengthOfLongestSubstring("aab")).toBe(2);
  });

  test('Complex scenario 6: "abba" should return 2', () => {
    expect(lengthOfLongestSubstring("abba")).toBe(2);
  });

  test('Complex scenario 7: "tmmzuxt" should return 5', () => {
    expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
  });
});
