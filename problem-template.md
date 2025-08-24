# Problem Template

## Problem Description

[Insert problem description here]

## Constraints

[Insert constraints here]

## README Examples

### Example 1:
- **Input:** [Insert input]
- **Output:** [Insert output]
- **Explanation:** [Insert explanation]

### Example 2:
- **Input:** [Insert input]
- **Output:** [Insert output]
- **Explanation:** [Insert explanation]

## File Structure

### Required Files:
1. `{problem_number}.{kebab-case-description}.js` - Main solution file
2. `{problem_number}.{kebab-case-description}.test.js` - Test file

[Do not implement function]
[Do not create Readme file]

[Format content of .md file to better look but do not change content]

### Function Signature:
```javascript
/**
 * @param {type} param1
 * @return {type}
 */
var functionName = function(param1) {
    
};

module.exports = { functionName };
```

## Test Cases Structure

### 1. README Examples
- Example 1: [input] → [expected output]
- Example 2: [input] → [expected output]

### 2. Edge Cases
- [Edge case description]: [input] → [expected output]
- [Edge case description]: [input] → [expected output]
- [Edge case description]: [input] → [expected output]

### 3. Common Patterns
- [Pattern description]: [input] → [expected output]
- [Pattern description]: [input] → [expected output]
- [Pattern description]: [input] → [expected output]

### 4. Boundary Conditions
- [Boundary description]: [input] → [expected output]
- [Boundary description]: [input] → [expected output]
- [Boundary description]: [input] → [expected output]

### 5. Complex Scenarios
- [Complex scenario description]: [input] → [expected output]
- [Complex scenario description]: [input] → [expected output]
- [Complex scenario description]: [input] → [expected output]

## Test File Structure

```javascript
const { functionName } = require('./{problem_number}.{kebab-case-description}.js');

describe('Problem Name - README Examples', () => {
  // README examples here
});

describe('Problem Name - Edge Cases', () => {
  // Edge cases here
});

describe('Problem Name - Common Patterns', () => {
  // Common patterns here
});

describe('Problem Name - Boundary Conditions', () => {
  // Boundary conditions here
});

describe('Problem Name - Complex Scenarios', () => {
  // Complex scenarios here
});
```

## Implementation Notes

### Key Points:
1. [Key point 1]
2. [Key point 2]
3. [Key point 3]
4. [Key point 4]

### Algorithm Approach:
- [Algorithm approach description]
- [Key steps or techniques]
- [Data structures to consider]

### Time Complexity:
- Optimal: [Time complexity]
- Space Complexity: [Space complexity]

## Future Generation Instructions

When generating this setup in the future:

1. **Read the README file** to understand the problem
2. **Create the main JS file** with empty function and proper JSDoc
3. **Create test file** with all 5 describe blocks and their respective test cases
4. **Ensure all test cases are comprehensive** covering edge cases, boundaries, and patterns
5. **Use proper naming** - avoid spaces in folder/file names
6. **Export the function** for testing
7. **Run tests** to verify setup works correctly

## File Naming Convention

- Main file: `{problem_number}.{kebab-case-description}.js`
- Test file: `{problem_number}.{kebab-case-description}.test.js`
- Folder: `{CategoryName}` (no spaces)

## Test Case Categories

### 1. README Examples
- Always include the original examples from the problem description
- These are the most important test cases

### 2. Edge Cases
- Single element arrays
- Two element arrays
- Empty arrays (if applicable)
- All same values
- Minimum/maximum values

### 3. Common Patterns
- Increasing sequences
- Decreasing sequences
- Alternating patterns
- Peak patterns
- Valley patterns

### 4. Boundary Conditions
- Minimum array size
- Maximum array size (sample)
- Minimum value constraints
- Maximum value constraints
- Zero values

### 5. Complex Scenarios
- Multiple peaks/valleys
- Steep changes
- Plateau patterns
- Real-world like scenarios
- Stress test cases 