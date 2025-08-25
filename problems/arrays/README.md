# Arrays Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all array problems.

## Arrays Best Practices

### Core Patterns
1. **Hash Map/Set for O(1) lookups**: Use when you need fast access to previously seen elements
2. **Two Pointers**: For problems involving pairs or when array is sorted
3. **Sliding Window**: For contiguous subarrays (moved to sliding_window category)
4. **Prefix/Suffix Arrays**: For range queries or cumulative operations
5. **In-place manipulation**: Modify array without extra space when possible

### Common Techniques
```javascript
// Hash map for frequency counting
const freq = {};
for (const item of array) {
    freq[item] = (freq[item] || 0) + 1;
}

// Two pointers (sorted array)
let left = 0, right = array.length - 1;
while (left < right) {
    // Process pair at left and right
    if (condition) left++;
    else right--;
}

// Prefix sum array
const prefixSum = [0];
for (let i = 0; i < array.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + array[i];
}
```

### When to Use Different Approaches
- **Hash Map**: Finding pairs, checking duplicates, frequency counting
- **Sorting**: When order doesn't matter or helps reduce complexity
- **Two Pointers**: Sorted arrays, finding pairs with specific sum
- **Binary Search**: Sorted arrays, finding specific values or positions

## Status Legend
- **TODO**: Problem setup exists, implementation needed
- **Implemented**: Solution completed and tested
- **Optimized**: Multiple solutions with different approaches
- **Review**: Needs code review or optimization

## Problem Tracking Template
```
### **{number}_{problem_name}**: [Status: TODO/Implemented/Optimized/Review]
- **Algorithm**: Brief description of main algorithm used
- **Approach**: Step-by-step approach description
- **Time Complexity**: Big O notation
- **Space Complexity**: Big O notation
- **Key Insight**: Main insight that makes the solution work
```