# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a LeetCode problem-solving repository containing algorithmic solutions organized by problem categories. Each problem has its own folder with JavaScript solutions and comprehensive Jest tests using snake_case naming conventions.

## Repository Structure

```
├── docs/                           # Documentation files
│   ├── CLAUDE.md                   # This file
│   ├── leetcode-prompt-template.md # Generation workflow
│   └── problem_categories.json     # Category mapping system
├── problems/                       # All LeetCode problems
│   ├── arrays/                     # Category folders (flat structure)
│   │   ├── 1_two_sum.js           # Solution files (exact numbers)
│   │   ├── 1_two_sum.test.js      # Test files  
│   │   ├── 1_two_sum.md           # Problem documentation
│   │   ├── 49_group_anagrams.js
│   │   └── ...
│   ├── sliding_window/
│   │   ├── 3_longest_substring_without_repeating_characters.js
│   │   ├── 3_longest_substring_without_repeating_characters.test.js
│   │   └── ...
│   ├── dynamic_programming/        # Merged 1D and 2D DP
│   ├── heap/                       # Priority queues and heaps
│   ├── math/                       # Math and geometry problems
│   └── ...
```

## LeetCode Problem Generation

When the user says "gen {number}", generate a LeetCode problem setup:

### Generation Workflow
1. **Use the prompt template** from `docs/leetcode-prompt-template.md`
2. **Fetch official LeetCode problem #{number}** details
3. **Auto-determine category** using `docs/problem_categories.json`
4. **Generate 3 files** directly in category folder with snake_case naming:
   - `{exact_number}_{snake_case_title}.js` - Empty function with TODO comment
   - `{exact_number}_{snake_case_title}.test.js` - Comprehensive test cases  
   - `{exact_number}_{snake_case_title}.md` - Problem documentation

### Critical Rules for Generation
- **DO NOT implement function bodies** - leave empty with `// TODO: Implement solution`
- **DO NOT add code suggestions** - user implements manually
- **DO create comprehensive test cases** covering all scenarios
- **DO use proper JSDoc** with parameter and return types
- **DO use snake_case for all file/folder names**
- **DO use exact problem numbers** without padding (1, 20, 576, 3364)
- **DO place files directly in category folders** (flat structure)
- **DO auto-detect category** using the mapping system

## Commands

### Testing
- `pnpm test` - Run all tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:auto` - Auto-run related tests when files change using custom watcher
- `pnpm jest --findRelatedTests <file>` - Run tests for specific file
- `pnpm jest <pattern>` - Run tests matching a specific pattern

### Package Management
- `pnpm install` - Install dependencies
- Uses pnpm as package manager (specified in package.json)

## File Structure & Conventions

### Problem Organization
Each problem category is a directory with snake_case naming (e.g., `sliding_window/`, `stack/`, `two_pointers/`). Problems are stored flat within each category folder.

### File Naming Convention
For each problem, create exactly 3 files directly in the category folder:
1. `{number}_{snake_case_title}.js` - Solution file
2. `{number}_{snake_case_title}.test.js` - Test file  
3. `{number}_{snake_case_title}.md` - Problem documentation

Examples in `problems/sliding_window/`:
- `3_longest_substring_without_repeating_characters.js`
- `3_longest_substring_without_repeating_characters.test.js` 
- `3_longest_substring_without_repeating_characters.md`
- `576_permutation_in_string.js`
- `576_permutation_in_string.test.js`
- `576_permutation_in_string.md`

### Solution File Structure
- Use JSDoc function documentation with parameter types and return types
- Export functions using `module.exports = { functionName }`
- Multiple solution implementations are common (basic, optimized versions with different approaches)
- Function names should match the exported module name for consistency

### Test File Structure
Tests are organized into 5 standard describe blocks:
1. `"Problem Name - README Examples"` - Examples from problem statement
2. `"Problem Name - Edge Cases"` - Single elements, boundaries, empty inputs
3. `"Problem Name - Common Patterns"` - Typical algorithmic patterns
4. `"Problem Name - Boundary Conditions"` - Min/max constraints
5. `"Problem Name - Complex Scenarios"` - Advanced test cases

### Key Development Practices
- Import functions using: `const { functionName } = require('./filename.js')`
- Follow existing test organization patterns
- Use `docs/leetcode-prompt-template.md` for new problem generation
- Files are stored flat within category folders with snake_case naming
- Use `docs/problem_categories.json` for automatic category detection

### Custom Tooling
- `test-watcher.js` provides automatic test running on file changes
- Uses chokidar to watch .js files (excluding .test.js) and runs related tests
- Excludes test files from triggering to prevent loops
- `docs/leetcode-prompt-template.md` contains the generation workflow template
- `docs/problem_categories.json` provides automatic category detection system

### AI Code Suggestions
- **Disabled for .js files** via `.vscode/settings.json` and `.cursorrules`
- **Chat validation enabled** - AI can help validate solutions when asked
- User implements all function logic manually
- AI assistance available for solution validation, debugging, and explanation

## Architecture Notes
- Pure JavaScript environment with Jest testing framework
- No build step required - direct Node.js execution
- CommonJS module system (require/module.exports)
- Each problem is self-contained with no cross-dependencies