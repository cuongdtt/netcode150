const { isPalindrome } = require("./150.valid-palindrome.js");

describe("Valid Palindrome", () => {
  test('Example 1: "A man, a plan, a canal: Panama" should return true', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test('Example 2: "race a car" should return false', () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  test('Example 3: " " should return true', () => {
    expect(isPalindrome(" ")).toBe(true);
  });

  test("Empty string should return true", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("Single character should return true", () => {
    expect(isPalindrome("a")).toBe(true);
    expect(isPalindrome("A")).toBe(true);
    expect(isPalindrome("5")).toBe(true);
  });

  test("Simple palindrome with only letters", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("deed")).toBe(true);
  });

  test("Simple non-palindrome with only letters", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("python")).toBe(false);
  });

  test("Palindrome with mixed case", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
    expect(isPalindrome("LeVeL")).toBe(true);
    expect(isPalindrome("DeEd")).toBe(true);
  });

  test("Palindrome with numbers", () => {
    expect(isPalindrome("12321")).toBe(true);
    expect(isPalindrome("1234321")).toBe(true);
    expect(isPalindrome("a1b2b1a")).toBe(true);
  });

  test("Non-palindrome with numbers", () => {
    expect(isPalindrome("12345")).toBe(false);
    expect(isPalindrome("a1b2c3")).toBe(false);
  });

  test("Palindrome with special characters and spaces", () => {
    expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
    expect(isPalindrome("No 'x' in Nixon")).toBe(true);
    expect(isPalindrome("Madam, I'm Adam")).toBe(true);
  });

  test("Non-palindrome with special characters", () => {
    expect(isPalindrome("Hello, World!")).toBe(false);
    expect(isPalindrome("This is not a palindrome")).toBe(false);
  });

  test("Palindrome with only numbers and special characters", () => {
    expect(isPalindrome("123 321")).toBe(true);
    expect(isPalindrome("1,2,3,2,1")).toBe(true);
  });

  test("Edge case: very long palindrome", () => {
    const longPalindrome = "a".repeat(1000) + "b" + "a".repeat(1000);
    expect(isPalindrome(longPalindrome)).toBe(true);
  });

  test("Edge case: very long non-palindrome", () => {
    const longNonPalindrome = "a".repeat(1000) + "b" + "c" + "a".repeat(1000);
    expect(isPalindrome(longNonPalindrome)).toBe(false);
  });

  test("Palindrome with unicode characters (should be ignored)", () => {
    expect(isPalindrome("a🚀a")).toBe(true);
    expect(isPalindrome("🚀a🚀")).toBe(true);
  });

  test("String with only special characters", () => {
    expect(isPalindrome("!@#$%^&*()")).toBe(true);
    expect(isPalindrome(".,;:?!")).toBe(true);
  });

  test("String with only spaces", () => {
    expect(isPalindrome("   ")).toBe(true);
    expect(isPalindrome("\t\n\r")).toBe(true);
  });
});
