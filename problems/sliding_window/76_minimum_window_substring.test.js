const { minWindow } = require('./76_minimum_window_substring.js');

describe("Minimum Window Substring - README Examples", () => {
    test('should return "BANC" for s = "ADOBECODEBANC", t = "ABC"', () => {
        expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
    });

    test('should return "a" for s = "a", t = "a"', () => {
        expect(minWindow("a", "a")).toBe("a");
    });

    test('should return "" for s = "a", t = "aa"', () => {
        expect(minWindow("a", "aa")).toBe("");
    });
});

describe("Minimum Window Substring - Edge Cases", () => {
    test("should return empty string when s is empty", () => {
        expect(minWindow("", "a")).toBe("");
    });

    test("should return empty string when t is empty", () => {
        expect(minWindow("a", "")).toBe("");
    });

    test("should return empty string when both are empty", () => {
        expect(minWindow("", "")).toBe("");
    });

    test("should return empty string when t is longer than s", () => {
        expect(minWindow("ab", "abc")).toBe("");
    });

    test("should handle single character match", () => {
        expect(minWindow("x", "x")).toBe("x");
    });
});

describe("Minimum Window Substring - Common Patterns", () => {
    test("should handle duplicate characters in t", () => {
        expect(minWindow("aaab", "aa")).toBe("aaa");
    });

    test("should handle case sensitivity", () => {
        expect(minWindow("Aa", "A")).toBe("A");
        expect(minWindow("Aa", "a")).toBe("a");
    });

    test("should find minimum window with all characters at the end", () => {
        expect(minWindow("acbbaca", "aba")).toBe("aca");
    });

    test("should handle repeated patterns", () => {
        expect(minWindow("abab", "ab")).toBe("ab");
    });

    test("should handle no valid window", () => {
        expect(minWindow("abc", "d")).toBe("");
    });
});

describe("Minimum Window Substring - Boundary Conditions", () => {
    test("should handle very long strings", () => {
        const s = "a".repeat(1000) + "b" + "c".repeat(1000);
        const t = "abc";
        const result = minWindow(s, t);
        expect(result).toContain("a");
        expect(result).toContain("b");
        expect(result).toContain("c");
        expect(result.length).toBeGreaterThanOrEqual(3);
    });

    test("should handle all same characters in s", () => {
        expect(minWindow("aaaa", "aa")).toBe("aa");
    });

    test("should handle t with all unique characters", () => {
        expect(minWindow("abcdef", "ace")).toBe("abce");
    });

    test("should handle exact match", () => {
        expect(minWindow("abc", "abc")).toBe("abc");
    });
});

describe("Minimum Window Substring - Complex Scenarios", () => {
    test("should find minimum among multiple valid windows", () => {
        expect(minWindow("this is a test string", "tist")).toBe("t stri");
    });

    test("should handle overlapping patterns", () => {
        expect(minWindow("abcabcbb", "abcbb")).toBe("abcbb");
    });

    test("should handle multiple occurrences with different minimum", () => {
        expect(minWindow("ADOBECODEBANC", "AABC")).toBe("ADOBECODEBA");
    });

    test("should handle special characters", () => {
        expect(minWindow("a!@#b$%c", "abc")).toBe("a!@#b$%c");
    });

    test("should handle numeric characters", () => {
        expect(minWindow("1a2b3c4", "abc")).toBe("a2b3c");
    });

    test("should handle minimum window at the beginning", () => {
        expect(minWindow("abcdefghijk", "abc")).toBe("abc");
    });

    test("should handle minimum window spanning entire string", () => {
        expect(minWindow("pwwkew", "wke")).toBe("wke");
    });
});