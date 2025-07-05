const { isValid } = require("./20.valid-parentheses.js");

describe("Valid Parentheses - README Examples", () => {
  test('Example 1: "()" should return true', () => {
    expect(isValid("()")).toBe(true);
  });

  test('Example 2: "()[]{}" should return true', () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test('Example 3: "(]" should return false', () => {
    expect(isValid("(]")).toBe(false);
  });

  test('Example 4: "([])" should return true', () => {
    expect(isValid("([])")).toBe(true);
  });
});

describe("Valid Parentheses - Edge Cases", () => {
  test("Empty string should return true", () => {
    expect(isValid("")).toBe(true);
  });

  test("Single opening bracket should return false", () => {
    expect(isValid("(")).toBe(false);
    expect(isValid("[")).toBe(false);
    expect(isValid("{")).toBe(false);
  });

  test("Single closing bracket should return false", () => {
    expect(isValid(")")).toBe(false);
    expect(isValid("]")).toBe(false);
    expect(isValid("}")).toBe(false);
  });

  test("Two opening brackets should return false", () => {
    expect(isValid("((")).toBe(false);
    expect(isValid("[{")).toBe(false);
  });

  test("Two closing brackets should return false", () => {
    expect(isValid("))")).toBe(false);
    expect(isValid("]}")).toBe(false);
  });

  test("Mismatched brackets should return false", () => {
    expect(isValid("(}")).toBe(false);
    expect(isValid("[)")).toBe(false);
    expect(isValid("{]")).toBe(false);
  });
});

describe("Valid Parentheses - Common Patterns", () => {
  test("Simple nested parentheses", () => {
    expect(isValid("(())")).toBe(true);
    expect(isValid("[[]]")).toBe(true);
    expect(isValid("{{}}")).toBe(true);
  });

  test("Mixed nested parentheses", () => {
    expect(isValid("([{}])")).toBe(true);
    expect(isValid("{[()]}")).toBe(true);
    expect(isValid("({[]})")).toBe(true);
  });

  test("Sequential valid parentheses", () => {
    expect(isValid("()()")).toBe(true);
    expect(isValid("[][]")).toBe(true);
    expect(isValid("{}{}")).toBe(true);
  });

  test("Complex nested structure", () => {
    expect(isValid("((()))")).toBe(true);
    expect(isValid("[[[]]]")).toBe(true);
    expect(isValid("{{{}}}")).toBe(true);
  });

  test("Mixed sequential and nested", () => {
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("([]){}")).toBe(true);
    expect(isValid("{[()]}")).toBe(true);
  });
});

describe("Valid Parentheses - Boundary Conditions", () => {
  test("Minimum string length (1 character)", () => {
    expect(isValid("(")).toBe(false);
    expect(isValid(")")).toBe(false);
    expect(isValid("[")).toBe(false);
    expect(isValid("]")).toBe(false);
    expect(isValid("{")).toBe(false);
    expect(isValid("}")).toBe(false);
  });

  test("Maximum string length (sample)", () => {
    const longString = "()".repeat(5000);
    expect(isValid(longString)).toBe(true);
  });

  test("All opening brackets", () => {
    expect(isValid("(((")).toBe(false);
    expect(isValid("[[[")).toBe(false);
    expect(isValid("{{{")).toBe(false);
  });

  test("All closing brackets", () => {
    expect(isValid(")))")).toBe(false);
    expect(isValid("]]]")).toBe(false);
    expect(isValid("}}}")).toBe(false);
  });

  test("Alternating opening and closing", () => {
    expect(isValid("()()()")).toBe(true);
    expect(isValid("[][]")).toBe(true);
    expect(isValid("{}{}{}")).toBe(true);
  });
});

describe("Valid Parentheses - Complex Scenarios", () => {
  test("Deeply nested structures", () => {
    expect(isValid("((((()))))")).toBe(true);
    expect(isValid("[[[[[]]]]]")).toBe(true);
    expect(isValid("{{{{{{}}}}}}")).toBe(true);
  });

  test("Mixed deep nesting", () => {
    expect(isValid("(([{}]))")).toBe(true);
    expect(isValid("[[({})]]")).toBe(true);
    expect(isValid("{{[()]}}")).toBe(true);
  });

  test("Invalid deep nesting", () => {
    expect(isValid("((([))))")).toBe(false);
    expect(isValid("[[[[]]]")).toBe(false);
    expect(isValid("{{{{}}")).toBe(false);
  });

  test("Complex mixed patterns", () => {
    expect(isValid("({[]})[{}]")).toBe(true);
    expect(isValid("([{}]){[]}")).toBe(true);
    expect(isValid("{[()]}([])")).toBe(true);
  });

  test("Invalid complex patterns", () => {
    expect(isValid("({[}])")).toBe(false);
    expect(isValid("([{])}")).toBe(false);
    expect(isValid("{[)]}")).toBe(false);
  });

  test("Stress test with many brackets", () => {
    const validComplex = "((((((((((((((((((((()))))))))))))))))))";
    expect(isValid(validComplex)).toBe(true);
  });

  test("Invalid stress test", () => {
    const invalidComplex = "((((((((((((((((((((())))))))))))))))))))";
    expect(isValid(invalidComplex)).toBe(false);
  });
});
