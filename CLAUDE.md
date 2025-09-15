# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚀 AUTOMATED COMMAND SYSTEM

**CRITICAL**: This repository uses automatic prompt template selection. When the user provides specific commands, immediately apply the corresponding template:

| Command Pattern | Auto-Select Template | Action |
|----------------|---------------------|---------|
| `gen {number}` | `@docs/leetcode-prompt-template.md` | Generate problem setup |
| `check {number}` | `@docs/check-prompt-template.md` | Analyze solution |
| `solution {number}` | `@docs/solution-prompt-template.md` | Generate AI solutions |
| `problem {number}` | `@docs/problem-template.md` | Create structure template |

**NO USER CONFIRMATION NEEDED** - Apply templates automatically when commands are detected.

## Overview

This is a LeetCode problem-solving repository containing algorithmic solutions organized by problem categories. Each problem has its own folder with JavaScript solutions and comprehensive Jest tests using snake_case naming conventions.

## Repository Structure

```
├── docs/                           # Documentation files
│   ├── CLAUDE.md                   # This file
│   ├── leetcode-prompt-template.md # Generation workflow
│   └── problem_categories.json     # Category mapping system
├── problems/                       # All LeetCode problems
│   ├── README.md                   # Algorithm tracking & implementation notes
│   ├── arrays/                     # Category folders (flat structure)
│   │   ├── 1_two_sum.js           # Solution files (exact numbers)
│   │   ├── 1_two_sum.test.js      # Test files  
│   │   ├── 1_two_sum.md           # Problem description only
│   │   └── ...
│   ├── sliding_window/
│   │   ├── 3_longest_substring_without_repeating_characters.js
│   │   ├── 3_longest_substring_without_repeating_characters.test.js
│   │   └── ...
│   ├── 1d_dynamic_programming/     # Linear DP problems
│   ├── 2d_dynamic_programming/     # Grid and matrix DP problems
│   ├── heap/                       # Priority queues and heaps
│   ├── math/                       # Math and geometry problems
│   └── ...
```

## LeetCode Problem Commands

### Automatic Prompt Template Selection
When the user provides a command, automatically select and use the corresponding prompt template:

| User Command | Auto-Select Template | Purpose |
|--------------|---------------------|---------|
| `gen {number}` | `@docs/leetcode-prompt-template.md` | Generate LeetCode problem setup |
| `check {number}` | `@docs/check-prompt-template.md` | Analyze and verify solution correctness |
| `solution {number}` | `@docs/solution-prompt-template.md` | Generate AI-powered solutions |
| `problem {number}` | `@docs/problem-template.md` | Create problem structure template |

### Problem Generation
When the user says "gen {number}", **automatically use** `@docs/leetcode-prompt-template.md`:

### Solution Analysis  
When the user says "check {number}", **automatically use** `@docs/check-prompt-template.md`:

### Solution Generation
When the user says "solution {number}", **automatically use** `@docs/solution-prompt-template.md`:

#### Problem Generation Workflow
1. **Check if problem already exists** - Skip generation if files exist
2. **Use the prompt template** from `docs/leetcode-prompt-template.md`
3. **Fetch official LeetCode problem #{number}** details
4. **Auto-determine category** using `docs/problem_categories.json`
5. **Generate 3 files** directly in category folder with snake_case naming:
   - `{exact_number}_{snake_case_title}.js` - Empty function with TODO comment
   - `{exact_number}_{snake_case_title}.test.js` - Comprehensive test cases  
   - `{exact_number}_{snake_case_title}.md` - Problem description only (no algorithm details)
6. **Update problems/README.md** - Add algorithm tracking entry with [Status: TODO]

#### Solution Analysis Workflow
1. **Use the prompt template** from `docs/check-prompt-template.md`
2. **Locate problem files** in appropriate category folder
3. **Analyze implementation status** - TODO vs actual code
4. **Assess code quality** - patterns, complexity, edge cases
5. **Run test suite** and report results with specific failures
6. **Provide detailed feedback** - performance analysis and improvement suggestions

#### Solution Generation Workflow  
1. **Use the prompt template** from `docs/solution-prompt-template.md`
2. **Analyze problem requirements** from .md file and constraints
3. **Generate multiple approaches** - intuitive, optimized, alternative patterns
4. **Implement working solutions** with proper complexity analysis
5. **Provide comparison table** of approaches with trade-offs
6. **Include testing guidance** and learning reinforcement notes

## Command Processing Rules

### Automatic Template Selection Logic
**CRITICAL**: When the user provides any of these commands, immediately and automatically apply the corresponding template without asking:

```
IF user_input matches "gen {number}" OR "generate {number}":
    → AUTO-APPLY: @docs/leetcode-prompt-template.md
    → ACTION: Generate problem setup files

IF user_input matches "check {number}" OR "analyze {number}":
    → AUTO-APPLY: @docs/check-prompt-template.md  
    → ACTION: Analyze existing solution

IF user_input matches "solution {number}" OR "solve {number}":
    → AUTO-APPLY: @docs/solution-prompt-template.md
    → ACTION: Generate AI solutions

IF user_input matches "problem {number}" OR "template {number}":
    → AUTO-APPLY: @docs/problem-template.md
    → ACTION: Create problem structure
```

### Command Aliases
Support these variations for user convenience:
- **Generation**: `gen`, `generate`, `create`, `setup`
- **Analysis**: `check`, `analyze`, `verify`, `test`, `validate`  
- **Solution**: `solution`, `solve`, `implement`, `code`
- **Template**: `problem`, `template`, `structure`

### Critical Rules for All Commands

#### Generation Rules (gen command):
- **CHECK if problem already exists first** - skip generation if any files exist
- **DO NOT overwrite existing problems** - respect existing implementations
- **DO NOT implement function bodies** - leave empty with `// TODO: Implement solution`
- **DO NOT add code suggestions** - user implements manually
- **DO create comprehensive test cases** covering all scenarios
- **DO use proper JSDoc** with parameter and return types
- **DO use snake_case for all file/folder names**
- **DO use exact problem numbers** without padding (1, 20, 576, 3364)
- **DO place files directly in category folders** (flat structure)
- **DO auto-detect category** using the mapping system
- **DO keep .md files simple** - only problem description, constraints, examples
- **DO add algorithm tracking to problems/README.md** with [Status: TODO]

#### Analysis Rules (check command):
- **DO run actual tests** - provide concrete test results and failures
- **DO analyze time/space complexity** - identify performance issues
- **DO suggest specific optimizations** - actionable improvement advice
- **DO check edge case handling** - null, empty, boundary conditions
- **DO provide encouraging feedback** - constructive and helpful tone
- **DO reference optimal complexity** - compare against known solutions

#### Solution Rules (solution command):
- **DO generate working code** - complete implementations, not TODOs
- **DO provide multiple approaches** - intuitive, optimized, alternatives  
- **DO include complexity analysis** - Big O for time and space
- **DO comment out alternatives** - preserve original when adding approaches
- **DO explain trade-offs** - when to use each approach
- **DO focus on learning** - teach patterns, not just solve problems

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

## Key Development Practices
- Import functions using: `const { functionName } = require('./filename.js')`
- Follow existing test organization patterns
- Use `docs/leetcode-prompt-template.md` for new problem generation
- Files are stored flat within category folders with snake_case naming
- Use `docs/problem_categories.json` for automatic category detection
- **Algorithm tracking**: Update `problems/README.md` when implementing solutions
- **Separation of concerns**: Problem descriptions in `.md`, algorithm notes in `problems/README.md`

## Custom Tooling
- `test-watcher.js` provides automatic test running on file changes
- Uses chokidar to watch .js files (excluding .test.js) and runs related tests
- Excludes test files from triggering to prevent loops
- `docs/leetcode-prompt-template.md` contains the generation workflow template
- `docs/check-prompt-template.md` contains the solution analysis workflow template
- `docs/solution-prompt-template.md` contains the AI solution generation workflow template
- `docs/problem_categories.json` provides automatic category detection system

## AI Code Suggestions
- **Disabled for .js files** via `.vscode/settings.json` and `.cursorrules`
- **Chat validation enabled** - AI can help validate solutions when asked
- User implements all function logic manually
- AI assistance available for solution validation, debugging, and explanation

## Architecture Notes
- Pure JavaScript environment with Jest testing framework
- No build step required - direct Node.js execution
- CommonJS module system (require/module.exports)
- Each problem is self-contained with no cross-dependencies