# 424. Longest Repeating Character Replacement - Solution Analysis

**Category:** sliding_window | **Difficulty:** Medium | **Status:** ⚠️ Needs Work

## Current Solution Overview

### Implementation Status
- **File:** `424_longest_repeating_character_replacement.js`
- **Function:** `characterReplacement`
- **Approach:** Sliding window with character frequency tracking
- **Status:** Partial - has bug in maxCount handling

### Current Code
```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if (s.length === 0) return 0;

  const charCount = {};
  let maxCount = 0;
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    charCount[s[right]] = (charCount[s[right]] || 0) + 1;
    maxCount = Math.max(maxCount, charCount[s[right]]);

    while (right - left + 1 - maxCount > k) {
      charCount[s[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
```

## Performance Analysis

### Time & Space Complexity
- **Time Complexity:** O(n) - Single pass with sliding window (intended)
- **Space Complexity:** O(1) - At most 26 characters (A-Z) in frequency map
- **Optimal Complexity:** O(n) time, O(1) space
- **Assessment:** ⚠️ **Algorithm correct but implementation has bug**

### Algorithm Pattern
- **Category:** Variable-size Sliding Window
- **Key Technique:** Frequency counting with window expansion/contraction
- **Data Structures:** Hash map for character frequencies

## Test Results

### Test Summary
- **Total Tests:** 20/22 ✅ | 2/22 ❌
- **Status:** ❌ **Some Failing**

### Failed Tests
1. **Multiple character frequencies:** `characterReplacement("AABABBA", 2)`
   - **Expected:** 6
   - **Actual:** 5
   - **Issue:** Should find substring like "AABBBA" and replace 2 A's to get "BBBBBB" (length 6)

2. **Long string with mixed patterns:** `characterReplacement("AABABBAABABBA", 2)`
   - **Expected:** 8  
   - **Actual:** 5
   - **Issue:** Not finding optimal substring with 2 replacements

### Edge Cases Handled
- ✅ Empty string returns 0
- ✅ Single character strings
- ✅ All same characters
- ✅ Basic sliding window cases
- ✅ k=0 (no replacements allowed)
- ✅ k >= string length

## Code Quality Assessment

### Strengths
- ✅ Correct sliding window structure (expand right, contract left)
- ✅ Proper frequency counting approach
- ✅ Good edge case handling for empty strings
- ✅ Clean variable naming
- ✅ O(n) time complexity approach

### Areas for Improvement
- ❌ **Critical Bug:** `maxCount` doesn't update when characters removed from left
- ❌ **Logic Error:** Window contraction doesn't recalculate max frequency properly
- ❌ **Missing Optimization:** Could avoid recalculating maxCount every time

### Root Cause Analysis
The core issue is in this logic:
```javascript
while (right - left + 1 - maxCount > k) {
  charCount[s[left]]--;  // ❌ Decreases count but maxCount stays stale
  left++;
}
```

When `charCount[s[left]]` was the maximum frequency character and gets decremented, `maxCount` becomes stale and no longer represents the actual maximum frequency in the current window.

## Alternative Approaches

### Approach 1: Fix Current Implementation (Recommended)
- **Complexity:** O(n) time, O(1) space
- **Trade-offs:** Optimal performance with correct logic
- **Fix:** Recalculate maxCount when needed or use optimized tracking

### Approach 2: Brute Force (For Verification)
- **Complexity:** O(n³) time, O(1) space  
- **Trade-offs:** Simple but too slow for large inputs
- **Use case:** Verify correctness of test cases

### Approach 3: Optimized Sliding Window
- **Complexity:** O(n) time, O(1) space
- **Trade-offs:** Most efficient, avoids recalculating maxCount unnecessarily
- **Implementation:** Track maxCount more carefully during window operations

## Learning Notes

### Pattern Recognition
- **How to identify:** "Longest substring" + "at most k replacements" → Variable sliding window
- **Common variations:** Longest substring with at most k distinct characters
- **Key insight:** Window size = maxFreq + k (characters to replace)

### Implementation Tips
- **Critical insight:** `windowSize - maxFreq = replacements needed`
- **Window validity:** Keep expanding while `replacements needed ≤ k`
- **maxCount tracking:** Either recalculate or use optimized update strategy
- **Early termination:** Can stop when `maxLength ≥ remaining characters + k`

### Common Pitfalls to Avoid
- ❌ Not updating maxCount when window contracts
- ❌ Recalculating maxCount unnecessarily (performance)
- ❌ Off-by-one errors in window size calculation
- ❌ Not handling edge cases (empty string, k=0)

## Related Problems
- **Problem 3:** Longest Substring Without Repeating Characters
- **Problem 209:** Minimum Size Subarray Sum (similar sliding window)
- **Problem 340:** Longest Substring with At Most K Distinct Characters
- **Problem 1004:** Max Consecutive Ones III (similar k-replacement pattern)

## Debugging Analysis

### Test Case: "AABABBA" with k=2
**Expected Result:** 6 (replace "AABBBA" → "BBBBBB")

**Current Algorithm Trace:**
```
Window: A      -> maxCount=1, windowSize=1, valid (1-1=0 ≤ 2)
Window: AA     -> maxCount=2, windowSize=2, valid (2-2=0 ≤ 2)  
Window: AAB    -> maxCount=2, windowSize=3, valid (3-2=1 ≤ 2)
Window: AABB   -> maxCount=2, windowSize=4, valid (4-2=2 ≤ 2)
Window: AABBB  -> maxCount=3, windowSize=5, valid (5-3=2 ≤ 2)
Window: AABBBA -> maxCount=3, windowSize=6, invalid (6-3=3 > 2)
  Contract: Remove A, but maxCount stays 3 (BUG!)
  Now window: ABBBA, but maxCount=3 is wrong
```

**The bug:** After removing the first 'A', the actual max frequency becomes 2 (for 'B'), but `maxCount` remains 3, causing incorrect window size calculations.

## Final Assessment

### Overall Rating: ⭐⭐⭐ (3/5 stars)

### Summary
The implementation demonstrates good understanding of sliding window pattern and has the right algorithmic approach. However, it contains a critical bug in handling `maxCount` updates during window contraction. The solution works for simple cases but fails on complex scenarios requiring precise frequency tracking.

### Next Steps
1. **Immediate fix:** Implement proper maxCount tracking during window contraction
2. **Testing:** Verify fix works on failing test cases  
3. **Optimization:** Consider whether to recalculate maxCount or use optimized tracking
4. **Pattern mastery:** Practice similar sliding window problems with frequency constraints

---
*Analysis generated on January 2025 using check prompt template*
