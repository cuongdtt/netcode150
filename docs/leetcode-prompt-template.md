# LeetCode Problem Generation Prompt Template

Use this prompt when the user says "gen {number}" to generate a LeetCode problem:

## Prompt Template

```
Generate LeetCode problem #{number} setup with the following requirements:

1. **Fetch Problem Information**: Get the official problem title, description, constraints, and examples from LeetCode problem #{number}

2. **Auto-Determine Category**: 
   - Use problem_categories.json to determine the correct category
   - Check problem number in category mappings or use keywords from title/description
   - Default to "arrays" if category cannot be determined

3. **Create Files in Category Folder**: 
   - Place files directly in: problems/{category}/
   - Use flat structure (no individual problem folders)

4. **Generate 3 Files**:

### File 1: `{number}_{snake_case_title}.js`
```javascript
/**
 * @param {{param_type}} {param_name}
 * @return {{return_type}}
 */
var {functionName} = function({parameters}) {
    // TODO: Implement solution
};

module.exports = { {functionName} };
```

### File 2: `{number}_{snake_case_title}.test.js`
Create comprehensive tests with 5 describe blocks:
1. "Problem Name - README Examples" - Official examples
2. "Problem Name - Edge Cases" - Minimal inputs, boundaries
3. "Problem Name - Common Patterns" - Typical algorithmic patterns
4. "Problem Name - Boundary Conditions" - Constraint limits
5. "Problem Name - Complex Scenarios" - Advanced test cases

### File 3: `{number}_{snake_case_title}.md`
Include:
- Problem description
- Constraints
- Examples with explanations
- Algorithm approach hints
- Time/Space complexity targets

## Generation Rules:
- **DO NOT implement the function body** - leave it empty with TODO comment
- **DO NOT add AI code suggestions** - the user will implement manually
- **DO include comprehensive test cases** based on problem requirements
- **DO add proper JSDoc with parameter and return types**
- **DO use snake_case for file names and directories**
- **DO use exact problem numbers without padding (1, 20, 576, 3364)**
- **DO export the main function for testing**
- **DO place files directly in category folder (flat structure)**

## Naming Examples:
- Problem #1 "Two Sum" → problems/arrays/1_two_sum.js
- Problem #20 "Valid Parentheses" → problems/stack/20_valid_parentheses.js  
- Problem #70 "Climbing Stairs" → problems/dynamic_programming/70_climbing_stairs.js
- Problem #576 "Permutation in String" → problems/sliding_window/576_permutation_in_string.js
- Problem #1234 "Replace Elements" → problems/arrays/1234_replace_elements.js

## Category Auto-Detection:
Use docs/problem_categories.json to determine category based on:
1. Problem number (if listed in category mappings)
2. Title/description keywords
3. Default to arrays if uncertain
```

## Important Notes:
- Always fetch the actual LeetCode problem information
- Create empty function implementations only
- Generate comprehensive test cases
- Use automatic category detection
- Use flat structure within category folders with snake_case naming