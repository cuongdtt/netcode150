# Check Solution Prompt Template

Use this prompt when the user says "check {number}" to analyze and verify solution correctness and efficiency:

## Prompt Template

```
Analyze and verify LeetCode problem #{number} solution with detailed feedback:

1. **Locate Problem Files**:
   - Find {number}_{snake_case_title}.js in appropriate category folder
   - Locate corresponding .test.js and .md files
   - If problem not found, suggest using "gen {number}" first

2. **Solution Analysis**:
   - **Implementation Status**: 
     - Check if solution contains only TODO comments (not implemented)
     - Identify exported functions and their names
     - Detect if solution is partial or complete
   
   - **Code Quality Assessment**:
     - Analyze algorithmic approach used (brute force, optimal, etc.)
     - Identify patterns: sliding window, two pointers, hash map, etc.
     - Check for edge case handling (empty inputs, null checks, boundaries)
     - Review variable naming and code clarity

   - **Time & Space Complexity**:
     - Estimate Big O time complexity based on code patterns
     - Identify space complexity considerations
     - Flag potential performance issues (nested loops, inefficient data structures)
     - Compare against optimal solutions if current approach is suboptimal

3. **Test Execution**:
   - Run existing test suite: `pnpm test {test_file}`
   - Report pass/fail status with specific test results
   - For failed tests, provide:
     - Which test cases are failing
     - Expected vs actual outputs
     - Root cause analysis when possible

4. **Detailed Feedback Report**:

### ✅ **SOLUTION STATUS**
- Implementation found: Yes/No
- Functions exported: [list function names]
- Current approach: [describe algorithm/pattern used]

### ⏱️ **PERFORMANCE ANALYSIS**
- Time complexity: O(?) - [assessment: optimal/suboptimal/needs improvement]
- Space complexity: O(?) 
- Performance concerns: [list any issues]

### 🧪 **TEST RESULTS**
- Tests passed: X/Y
- Failed test details: [specific failures with explanations]
- Edge cases covered: [assessment]

### 💡 **IMPROVEMENT SUGGESTIONS**
- Code quality: [suggestions for better implementation]
- Performance optimization: [specific optimizations if needed]
- Missing edge cases: [what should be handled]
- Alternative approaches: [mention if better algorithms exist]

### 🎯 **OVERALL VERDICT**
- ✅ Solution is correct and efficient
- ⚠️ Solution works but could be optimized 
- 🔧 Solution needs debugging/fixes
- 🚧 Solution not implemented yet

### 📋 **NEXT STEPS**
- If solution is correct: Suggest trying more problems in same category
- If suboptimal: Recommend specific optimizations
- If incorrect: Point to specific issues to debug
- If not implemented: Suggest using "solution {number}" for AI help

## Analysis Guidelines:

### Pattern Recognition:
- **O(n²) indicators**: Nested loops, checking all pairs
- **O(n) indicators**: Single pass, hash map usage, two pointers
- **O(log n) indicators**: Binary search, divide and conquer
- **Space complexity**: Extra data structures, recursion depth

### Common Issues to Flag:
- Nested loops when hash map could achieve O(n)
- Missing null/empty input handling  
- Off-by-one errors in array indexing
- Incorrect edge case handling
- Inefficient string/array operations

### Category-Specific Checks:
- **Sliding Window**: Window expansion/contraction logic
- **Two Pointers**: Pointer movement conditions
- **Dynamic Programming**: Base cases and state transitions
- **Trees/Graphs**: Null checks and traversal correctness

7. **Create Solution Analysis File**:

After completing all analysis, create a comprehensive documentation file:

### File: `{number}_solution.md`
```markdown
# {Problem Number}. {Problem Title} - Solution Analysis

**Category:** {category} | **Difficulty:** {difficulty} | **Status:** ✅ Solved / ⚠️ Needs Work / 🚧 Not Implemented

## Current Solution Overview

### Implementation Status
- **File:** `{number}_{snake_case_title}.js`
- **Function:** `{functionName}`
- **Approach:** [Brief description of current algorithm]
- **Status:** [Complete/Partial/TODO only]

### Current Code
```javascript
[Current implementation from the .js file]
```

## Performance Analysis

### Time & Space Complexity
- **Time Complexity:** O(?) - [Analysis of current implementation]
- **Space Complexity:** O(?) - [Memory usage analysis] 
- **Optimal Complexity:** O(?) time, O(?) space
- **Assessment:** ✅ Optimal / ⚠️ Suboptimal / 🔧 Needs improvement

### Algorithm Pattern
- **Category:** [Sliding Window/Two Pointers/Hash Map/etc.]
- **Key Technique:** [Main algorithmic approach used]
- **Data Structures:** [Primary data structures utilized]

## Test Results

### Test Summary
- **Total Tests:** {passed}/{total}
- **Status:** ✅ All Pass / ❌ Some Failing / 🚧 Not Tested

### Failed Tests (if any)
[Specific test failures with expected vs actual results]

### Edge Cases Handled
- [List of edge cases properly handled]
- [List of missing edge cases, if any]

## Code Quality Assessment

### Strengths
- [Positive aspects of current implementation]
- [Good practices demonstrated]
- [Efficient patterns used]

### Areas for Improvement
- [Specific issues identified]
- [Performance concerns]
- [Code clarity suggestions]

### Missing Edge Cases
- [Edge cases not handled]
- [Boundary conditions to consider]

## Alternative Approaches

### Approach 1: [Alternative method name]
- **Complexity:** O(?) time, O(?) space
- **Trade-offs:** [When to use this approach]
- **Implementation notes:** [Key differences from current]

### Approach 2: [Another alternative if applicable]
- **Complexity:** O(?) time, O(?) space  
- **Trade-offs:** [Benefits and drawbacks]

## Learning Notes

### Pattern Recognition
- **How to identify:** [Key indicators for this problem type]
- **Common variations:** [Related problem patterns]
- **Key insights:** [Important algorithmic insights]

### Implementation Tips
- [Specific coding tips for this pattern]
- [Common pitfalls to avoid]
- [Optimization techniques]

## Related Problems
- [Similar problems to practice]
- [Problems using same patterns]
- [Next level difficulty problems]

## Final Assessment

### Overall Rating: ⭐⭐⭐⭐⭐ (1-5 stars)

### Summary
[Overall assessment of solution quality, correctness, and efficiency]

### Next Steps
- [Immediate action items]
- [Long-term improvement suggestions]
- [Practice recommendations]

---
*Analysis generated on {date} using check prompt template*
```

## Output Format:
1. **Provide comprehensive feedback** with clear section headers and emojis
2. **Include specific technical details** and actionable suggestions  
3. **Create the solution analysis file** with complete documentation
4. **Use encouraging tone** while being thorough and constructive
5. **Reference the analysis file** at the end: "📄 Complete analysis saved to: `{number}_solution.md`"
```

## Usage Examples:
- User: "check 3" → Analyze longest substring without repeating characters
- User: "check 167" → Verify two sum II implementation  
- User: "check 121" → Review best time to buy/sell stock solution

## Important Notes:
- Always run the actual tests to provide concrete feedback
- Be specific about performance issues and optimizations
- Encourage good practices while providing constructive criticism
- Suggest concrete next steps based on solution status
- Reference the problem's optimal complexity when known