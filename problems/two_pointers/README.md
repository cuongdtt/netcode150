# Two Pointers Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all two pointers problems.

## Problems in This Category

### **167_two_sum_ii_input_array_is_sorted**: [Status: TODO]
- **Algorithm**: Two pointers technique on sorted array
- **Approach**: Use left and right pointers starting from both ends, adjust based on sum comparison with target
- **Time Complexity**: O(n) - single pass through array
- **Space Complexity**: O(1) - only using two pointer variables
- **Key Insight**: Leverage sorted array property to eliminate half of remaining elements on each comparison

## Two Pointers Best Practices

### Core Pattern
Two pointers technique uses two references to traverse data structure, often reducing time complexity from O(n²) to O(n):

```javascript
// Opposite direction (common for sorted arrays)
let left = 0, right = array.length - 1;
while (left < right) {
    if (condition_met) {
        // Process current pair
        left++;
        right--;
    } else if (need_larger_sum) {
        left++;
    } else {
        right--;
    }
}

// Same direction (fast and slow pointers)
let slow = 0, fast = 0;
while (fast < array.length) {
    // Move fast pointer
    fast++;
    
    // Move slow pointer conditionally
    if (condition) {
        slow++;
    }
}
```

### Common Variations
1. **Opposite Direction**: Start from both ends, move toward center (sorted array problems)
2. **Same Direction**: Fast and slow pointers (cycle detection, removing duplicates)
3. **Fixed Distance**: Maintain constant distance between pointers
4. **Variable Distance**: Adjust distance based on conditions

### When to Use Two Pointers
- Sorted arrays with target sum/difference
- Removing duplicates in-place
- Cycle detection in linked lists
- Finding pairs with specific properties
- Merging sorted arrays
- Palindrome checking

### Time/Space Complexity
- **Time**: Usually O(n) instead of O(n²)
- **Space**: O(1) - no extra data structures needed

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