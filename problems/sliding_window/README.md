# Sliding Window Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all sliding window problems.

## Sliding Window Best Practices

### Core Pattern
The sliding window technique uses two pointers to create a "window" that slides over the data:
```javascript
let left = 0;
for (let right = 0; right < array.length; right++) {
    // Expand window by including array[right]
    
    // Shrink window while condition is violated
    while (/* window invalid */) {
        left++;
    }
    
    // Update result with current window
}
```

### Common Variations
1. **Fixed Size Window**: Window size remains constant (problems 643, 219)
2. **Variable Size Window**: Window grows and shrinks based on conditions (problems 3, 209, 424)
3. **Frequency-based Window**: Track character/element frequencies (problems 424, 576, 219)

### When to Use Sliding Window
- Finding optimal subarray/substring
- Problems with contiguous elements
- Can be solved with two pointers moving in same direction
- Often replaces brute force O(n²) solutions with O(n)

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