# Sliding Window Technique

## Overview

The Sliding Window technique is an algorithmic approach that uses a window (subarray/substring) that slides through a data structure to solve problems efficiently. It's particularly useful for problems involving contiguous elements and can often reduce time complexity from O(n²) or O(n³) to O(n).

## When to Use Sliding Window

### ✅ **Good for:**
- **Subarray/substring problems**
- **Contiguous elements**
- **Optimization problems** (min/max)
- **Problems with constraints** (sum, length, etc.)
- **String problems** (longest substring, pattern matching)
- **Array problems** (sum, average, min/max in window)

### ❌ **Not suitable for:**
- **Non-contiguous elements**
- **Permutation problems**
- **Problems requiring backtracking**
- **Problems with complex dependencies**

## Types of Sliding Window

### 1. Fixed Size Window
The window size remains constant throughout the algorithm.

**Example: Find maximum sum of k consecutive elements**

**Implementation Template:**
```javascript
function fixedSizeWindow(arr, k) {
    let windowSum = 0;
    let maxSum = 0;
    
    // Initialize first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

**Key Steps:**
1. Calculate sum of first k elements
2. Slide window by subtracting leftmost element and adding rightmost element
3. Update result (max/min) at each step

### 2. Variable Size Window
The window size changes based on conditions.

**Example: Find smallest subarray with sum >= target**

**Implementation Template:**
```javascript
function variableSizeWindow(arr, target) {
    let left = 0;
    let currentSum = 0;
    let minLength = Infinity;
    
    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right];
        
        // Shrink window while condition is met
        while (currentSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            currentSum -= arr[left];
            left++;
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
}
```

**Key Steps:**
1. Expand window (right pointer)
2. Check if condition is met
3. Shrink window (left pointer) while condition remains true
4. Update result at each valid window

### 3. Two Pointers (Single Pass)
One pointer tracks a condition, another scans forward.

**Example: Longest substring without repeating characters**

**Implementation Template:**
```javascript
function twoPointersWindow(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();
    
    for (let right = 0; right < s.length; right++) {
        // Expand window
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
```

**Key Steps:**
1. Expand right pointer
2. Check for violation of constraint
3. Shrink left pointer until constraint is satisfied
4. Update result

## Common Sliding Window Patterns

### 1. Maximum/Minimum in Window

**Problem Type:** Find max/min value in each window of size k

**Implementation:**
```javascript
function maxInWindow(arr, k) {
    let result = [];
    let deque = []; // Store indices
    
    for (let i = 0; i < arr.length; i++) {
        // Remove elements outside window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // Remove smaller elements from back
        while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // Add max to result (starting from k-1)
        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }
    
    return result;
}
```

### 2. Longest Substring Without Repeating Characters

**Problem Type:** Find longest substring with unique characters

**Implementation:**
```javascript
function longestSubstringWithoutRepeating(s) {
    let left = 0;
    let maxLength = 0;
    let charMap = new Map();
    
    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right])) {
            left = Math.max(left, charMap.get(s[right]) + 1);
        }
        charMap.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
```

### 3. Minimum Window Substring

**Problem Type:** Find smallest substring containing all characters from pattern

**Implementation:**
```javascript
function minWindowSubstring(s, t) {
    let charCount = new Map();
    let required = 0;
    let formed = 0;
    let left = 0;
    let minLength = Infinity;
    let result = "";
    
    // Count characters in pattern
    for (let char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    required = charCount.size;
    
    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) - 1);
            if (charCount.get(char) === 0) formed++;
        }
        
        while (formed === required) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                result = s.substring(left, right + 1);
            }
            
            let leftChar = s[left];
            if (charCount.has(leftChar)) {
                charCount.set(leftChar, charCount.get(leftChar) + 1);
                if (charCount.get(leftChar) > 0) formed--;
            }
            left++;
        }
    }
    
    return result;
}
```

### 4. Sliding Window with Hash Map

**Problem Type:** Problems requiring character/pattern counting

**Implementation Template:**
```javascript
function slidingWindowWithHashMap(s, pattern) {
    let patternMap = new Map();
    let windowMap = new Map();
    let left = 0;
    let result = [];
    
    // Build pattern frequency map
    for (let char of pattern) {
        patternMap.set(char, (patternMap.get(char) || 0) + 1);
    }
    
    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        windowMap.set(char, (windowMap.get(char) || 0) + 1);
        
        // Check if window contains pattern
        if (isValidWindow(windowMap, patternMap)) {
            result.push(left);
        }
        
        // Shrink window if needed
        while (windowMap.size > patternMap.size || 
               (windowMap.get(s[left]) > (patternMap.get(s[left]) || 0))) {
            let leftChar = s[left];
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);
            if (windowMap.get(leftChar) === 0) {
                windowMap.delete(leftChar);
            }
            left++;
        }
    }
    
    return result;
}

function isValidWindow(windowMap, patternMap) {
    for (let [char, count] of patternMap) {
        if ((windowMap.get(char) || 0) < count) {
            return false;
        }
    }
    return true;
}
```

## Problem-Solving Strategy

### Step-by-Step Approach:

1. **Identify the Problem Type:**
   - Fixed size window → Use template 1
   - Variable size window → Use template 2
   - Two pointers → Use template 3

2. **Choose the Right Pattern:**
   - Max/Min in window → Use deque/monotonic queue
   - Unique characters → Use Set/Map
   - Pattern matching → Use frequency counting
   - Sum constraints → Use cumulative sum

3. **Implement the Template:**
   - Initialize pointers and data structures
   - Expand window (right pointer)
   - Check conditions
   - Shrink window (left pointer) if needed
   - Update result

4. **Handle Edge Cases:**
   - Empty input
   - Single element
   - All same elements
   - No valid solution

### Time Complexity Analysis:
- **Fixed Size Window:** O(n)
- **Variable Size Window:** O(n) (each element visited at most twice)
- **Two Pointers:** O(n) (each pointer moves at most n times)

### Space Complexity Analysis:
- **Hash Map/Set:** O(k) where k is unique elements
- **Deque:** O(k) where k is window size
- **Overall:** Usually O(1) to O(n) depending on data structure

## Common Mistakes to Avoid:

1. **Not handling edge cases** (empty input, single element)
2. **Incorrect window shrinking logic**
3. **Forgetting to update result at each step**
4. **Using wrong data structure for the problem type**
5. **Not considering all possible valid windows**

## Practice Problems by Type:

### Fixed Size Window:
- Maximum sum of k consecutive elements
- Average of k consecutive elements
- Count of subarrays with given sum

### Variable Size Window:
- Smallest subarray with sum >= target
- Longest subarray with sum <= target
- Minimum window substring

### Two Pointers:
- Longest substring without repeating characters
- Container with most water
- Two sum in sorted array

### Hash Map Window:
- Find all anagrams in a string
- Permutation in string
- Substring with concatenation of all words