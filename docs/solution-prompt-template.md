# Solution Generation Prompt Template

Use this prompt when the user says "solution {number}" to generate AI-powered solutions with multiple approaches:

## Prompt Template

```
Generate comprehensive solution for LeetCode problem #{number} with multiple approaches and detailed analysis:

1. **Locate Problem Files**:
   - Find {number}_{snake_case_title}.js in appropriate category folder
   - Check current implementation status (TODO vs implemented)
   - Locate .md file for problem description and constraints

2. **Problem Analysis**:
   - **Read Problem Description**: Extract key requirements from .md file
   - **Identify Category**: Determine the algorithm category (sliding window, two pointers, etc.)
   - **Constraint Analysis**: Note input limits that affect approach selection
   - **Pattern Recognition**: Identify which algorithmic patterns apply

3. **Solution Generation Strategy**:

### For Empty/TODO Solutions:
- Generate 1-2 complete working implementations
- Start with most intuitive approach, then optimized version
- Include full function body with proper logic

### For Existing Solutions:
- Analyze current approach and complexity
- Generate 1-3 alternative implementations with different trade-offs
- Show improvements or different perspectives
- Comment out alternatives to preserve original

4. **Multiple Approach Framework**:

### Approach 1: [Most Intuitive/Brute Force]
```javascript
// Approach: [Brief description]
// Time Complexity: O(?)
// Space Complexity: O(?)
// Trade-offs: [When to use this approach]

var functionName = function(params) {
    // Clear, readable implementation
    // Include comments explaining key steps
};
```

### Approach 2: [Optimized]
```javascript
// Approach: [Brief description] 
// Time Complexity: O(?)
// Space Complexity: O(?)
// Trade-offs: [Why this is better/different]

// var functionName = function(params) {
//     // Optimized implementation
//     // Focus on efficiency improvements
// };
```

### Approach 3: [Alternative Pattern - if applicable]
```javascript
// Approach: [Different algorithmic pattern]
// Time Complexity: O(?)
// Space Complexity: O(?)
// Trade-offs: [Unique benefits of this approach]

// var functionName = function(params) {
//     // Different algorithmic approach
//     // Highlight pattern differences
// };
```

5. **Category-Specific Implementation Guidance**:

### Sliding Window Problems:
- **Fixed vs Variable Window**: Determine window type from constraints
- **Window State Tracking**: Use appropriate data structures (Set, Map, counters)
- **Expansion/Contraction**: Clear logic for when to move left/right pointers

### Two Pointers Problems:
- **Pointer Initialization**: Based on problem requirements (start/end, slow/fast)
- **Movement Logic**: Clear conditions for pointer advancement
- **Termination**: Proper loop conditions and edge cases

### Array/Hash Problems:
- **Space-Time Trade-offs**: When to use extra space for O(1) lookups
- **Hash Map Strategies**: Key-value relationships and collision handling
- **In-place vs Extra Space**: When each approach is preferable

### Dynamic Programming:
- **State Definition**: What each dp[i] represents
- **Base Cases**: Initialize properly for edge cases  
- **Transition**: Clear recurrence relation
- **Optimization**: Space optimization opportunities (rolling arrays)

6. **Implementation Standards**:

### Code Quality:
- **Clear Variable Names**: Use descriptive names (left, right, windowSum, etc.)
- **Comments**: Explain non-obvious logic and key insights
- **Edge Cases**: Handle empty inputs, single elements, boundaries
- **Consistent Style**: Follow existing codebase patterns

### JSDoc Documentation:
- **Correct Parameter Types**: Match actual function signature
- **Return Type**: Accurate return type annotation
- **Brief Description**: One-line function purpose (optional)

### Module Exports:
- **Consistent Export**: `module.exports = { functionName };`
- **Multiple Solutions**: Export main function, comment alternatives

7. **Detailed Solution Report**:

### 🎯 **PROBLEM ANALYSIS**
- Problem Type: [Category and specific pattern]
- Key Constraints: [Important limits affecting approach]
- Optimal Complexity: O(?) time, O(?) space

### 💡 **SUGGESTED APPROACHES**
1. [Approach 1 name] - [Complexity] - [When to use]
2. [Approach 2 name] - [Complexity] - [Trade-offs]
3. [Approach 3 name] - [Complexity] - [Alternative benefits]

### 🔧 **IMPLEMENTATION DETAILS**
- **Primary Solution**: [Which approach is implemented and why]
- **Key Insights**: [Important algorithmic insights]
- **Edge Cases Handled**: [What edge cases are covered]
- **Optimizations Applied**: [Specific optimizations used]

### 📊 **COMPLEXITY ANALYSIS**
| Approach | Time | Space | Notes |
|----------|------|-------|-------|
| [Name] | O(?) | O(?) | [Trade-offs] |
| [Name] | O(?) | O(?) | [Benefits] |

### 🧪 **TESTING GUIDANCE**
- Run tests: `pnpm test problems/{category}/{number}_{name}.test.js`
- Expected to pass: [Confidence level and known edge cases]
- Debug tips: [Common issues and how to fix]

### 📚 **LEARNING NOTES**
- **Pattern Recognition**: How to identify this pattern in future problems
- **Common Variations**: Related problem types
- **Next Practice**: Suggested problems to reinforce learning

## Solution Selection Criteria:

### When to Use Each Approach:
- **Brute Force**: For understanding, small inputs, interview discussions
- **Optimized**: Production code, large inputs, time-critical applications  
- **Space-Optimized**: Memory-constrained environments
- **Alternative Pattern**: Different trade-offs or cleaner code

### Code Generation Rules:
- **Generate working code**: No placeholder TODOs in primary solution
- **Test against constraints**: Ensure solution handles input limits
- **Follow patterns**: Use established patterns for the problem category
- **Maintain readability**: Clear code over clever code
- **Include alternatives**: Comment out additional approaches for reference

7. **Create Comprehensive Solution Documentation**:

After generating all solutions and analysis, create a detailed documentation file:

### File: `{number}_solution.md`
```markdown
# {Problem Number}. {Problem Title} - AI Solution Guide

**Category:** {category} | **Difficulty:** {difficulty} | **Generated:** {date}

## Problem Summary

### Description
[Brief problem description from .md file]

### Key Constraints
- [Important constraints that affect solution choice]
- [Input/output specifications]

### Examples
```
Input: [example input]
Output: [example output]
Explanation: [brief explanation]
```

## Current Implementation Status

### Before Solution Generation
- **Status:** ✅ Implemented / ⚠️ Partial / 🚧 TODO Only
- **Original Code:** 
```javascript
[Show current implementation if exists, or "// TODO: Implement solution"]
```

### After Solution Generation  
- **New Status:** ✅ Complete with Multiple Approaches
- **Primary Solution:** [Which approach is now active]

## Generated Solutions

### 🎯 Approach 1: [Primary approach name]
**Complexity:** O(?) time, O(?) space  
**When to use:** [Scenarios where this is best choice]

```javascript
/**
 * @param {type} param
 * @return {type}
 */
var functionName = function(params) {
    // [Complete implementation with comments]
    // [Explain key steps and logic]
    
    return result;
};

module.exports = { functionName };
```

**Key Insights:**
- [Main algorithmic insight]
- [Why this approach works]
- [Important implementation details]

### 🔧 Approach 2: [Alternative approach name]  
**Complexity:** O(?) time, O(?) space
**When to use:** [Trade-offs and scenarios]

```javascript
// Alternative: [Approach name]
// Time: O(?), Space: O(?)
// var functionName = function(params) {
//     [Alternative implementation]
//     return result;
// };
```

**Trade-offs:**
- **Pros:** [Advantages of this approach]
- **Cons:** [Disadvantages or limitations]
- **Comparison:** [How it differs from primary approach]

### 🚀 Approach 3: [Optimized/Different pattern - if applicable]
**Complexity:** O(?) time, O(?) space
**When to use:** [Specific use cases]

```javascript
// Advanced: [Approach name]
// Time: O(?), Space: O(?)
// var functionName = function(params) {
//     [Third approach implementation]  
//     return result;
// };
```

**Advanced Techniques:**
- [Special optimizations used]
- [Advanced data structures or algorithms]
- [When the extra complexity is worth it]

## Approach Comparison

| Approach | Time | Space | Readability | Best Use Case |
|----------|------|--------|-------------|---------------|
| [Name 1] | O(?) | O(?) | ⭐⭐⭐⭐⭐ | [Scenario] |
| [Name 2] | O(?) | O(?) | ⭐⭐⭐⭐ | [Scenario] |  
| [Name 3] | O(?) | O(?) | ⭐⭐⭐ | [Scenario] |

## Pattern Analysis

### Algorithm Category: [Sliding Window/Two Pointers/etc.]

#### Pattern Recognition
- **Keywords:** [Problem words that indicate this pattern]
- **Structure:** [Input/output structure that suggests approach]
- **Constraints:** [Constraint clues for algorithm choice]

#### Key Techniques Used
1. **[Technique 1]:** [How it applies to this problem]
2. **[Technique 2]:** [Implementation details]
3. **[Technique 3]:** [Optimization insights]

#### Common Pitfalls
- [Mistake 1]: [How to avoid]
- [Mistake 2]: [Correct approach]
- [Edge case]: [Proper handling]

## Testing & Validation

### Test Strategy
```bash
# Run existing tests
pnpm test problems/{category}/{number}_{snake_case_title}.test.js

# Expected result: All tests should pass
```

### Edge Cases to Verify
- [Edge case 1]: [Expected behavior]
- [Edge case 2]: [How solution handles it]
- [Boundary condition]: [Implementation considerations]

### Manual Testing Examples
```javascript
// Test case 1
console.log(functionName(input1)); // Expected: output1

// Test case 2  
console.log(functionName(input2)); // Expected: output2
```

## Learning Reinforcement

### Pattern Mastery
- **Core Concept:** [Main algorithmic concept to remember]
- **Template Pattern:** [Reusable code pattern for similar problems]
- **Variations:** [How this pattern adapts to different problems]

### Implementation Best Practices
1. **[Practice 1]:** [Why it's important]
2. **[Practice 2]:** [How it improves code quality]
3. **[Practice 3]:** [Performance or clarity benefit]

### Related Problems
#### Same Pattern:
- [Problem X]: [Brief description and how it's similar]
- [Problem Y]: [Variation and key differences]

#### Next Level:
- [Harder Problem]: [Additional complexity or concepts]
- [Variant Problem]: [Different twist on same pattern]

## Quick Reference

### Key Algorithm Steps
1. [Step 1]: [Brief description]
2. [Step 2]: [Brief description]  
3. [Step 3]: [Brief description]

### Code Template
```javascript
var problemPattern = function(params) {
    // Step 1: [Initialization]
    
    // Step 2: [Main algorithm logic]
    
    // Step 3: [Return result]
    
    return result;
};
```

### Complexity Cheatsheet
- **Optimal:** O(?) time, O(?) space
- **Acceptable:** O(?) time, O(?) space  
- **Avoid:** O(?) time (too slow for constraints)

## Final Notes

### Solution Quality: ⭐⭐⭐⭐⭐ (1-5 stars)

### Summary
[Overall assessment of generated solutions, their quality, and learning value]

### Next Practice Steps
1. [Immediate practice suggestion]
2. [Skill building recommendation]  
3. [Advanced topic to explore]

---
*AI-generated solutions using solution prompt template on {date}*  
*Primary approach: {selected_approach} | Alternatives provided: {count}*
```

## Output Format:
1. **Problem Analysis Summary** with category and pattern identification
2. **Generated Code with Multiple Approaches** - working implementations  
3. **Comprehensive Documentation File** with all solutions and analysis
4. **Approach Comparison Table** showing trade-offs and use cases
5. **Learning Reinforcement Section** with patterns and next steps
6. **Reference the solution file**: "📄 Complete solution guide saved to: `{number}_solution.md`"
```

## Usage Examples:
- User: "solution 3" → Generate sliding window approaches for longest substring
- User: "solution 167" → Create two-pointer solution for two sum II
- User: "solution 121" → Implement stock trading solution with alternatives

## Important Notes:
- Always generate working, testable code for the primary approach
- Include multiple approaches when beneficial
- Provide clear complexity analysis and trade-offs
- Comment out alternative implementations to preserve main solution
- Focus on teaching algorithmic patterns, not just solving the problem
- Encourage understanding through clear explanations and comparisons