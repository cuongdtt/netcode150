# 76. Minimum Window Substring

## Problem Description

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.

The testcases will be generated such that the answer is unique.

## Examples

### Example 1:

**Input:** s = "ADOBECODEBANC", t = "ABC"
**Output:** "BANC"

**Explanation:** The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

### Example 2:

**Input:** s = "a", t = "a"
**Output:** "a"

**Explanation:** The entire string s is the minimum window.

### Example 3:

**Input:** s = "a", t = "aa"
**Output:** ""

**Explanation:** Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string.

## Constraints

- 1 ≤ s.length, t.length ≤ 10^5
- s and t consist of uppercase and lowercase English letters.

## Follow up

Could you find an algorithm that runs in O(m + n) time?

## Notes

- A substring is a contiguous non-empty sequence of characters within a string.
- The algorithm should treat uppercase and lowercase letters as different characters.
- If no valid window exists, return an empty string.