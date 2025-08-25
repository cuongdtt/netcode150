# Stack Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all stack problems.

## Stack Best Practices

### Core Pattern
Stack (LIFO - Last In, First Out) is ideal for problems involving:
- Matching pairs (parentheses, brackets)
- Nested structures
- Maintaining order while processing
- Backtracking scenarios

```javascript
const stack = [];

// Push elements
stack.push(element);

// Pop elements (check if empty first)
if (stack.length > 0) {
    const top = stack.pop();
}

// Peek at top without removing
const top = stack[stack.length - 1];
```

### Common Stack Applications
1. **Parentheses Matching**: Check if brackets/parentheses are balanced
2. **Expression Evaluation**: Infix to postfix conversion, calculator
3. **Monotonic Stack**: Maintain increasing/decreasing order
4. **Call Stack Simulation**: Recursive algorithms iteratively
5. **Undo Operations**: Maintain history of operations

### Monotonic Stack Pattern
```javascript
// Monotonic decreasing stack (for next greater element)
const stack = [];
const result = [];

for (let i = 0; i < array.length; i++) {
    while (stack.length > 0 && array[stack[stack.length - 1]] < array[i]) {
        const index = stack.pop();
        result[index] = array[i]; // Found next greater element
    }
    stack.push(i);
}
```

### When to Use Stack
- Problems with nested structures
- Need to remember previous state
- Processing in reverse order
- Matching pairs or validating sequences
- Converting recursion to iteration

### Time/Space Complexity
- **Push/Pop**: O(1)
- **Space**: O(n) in worst case
- **Overall**: Often reduces complex problems to O(n)

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