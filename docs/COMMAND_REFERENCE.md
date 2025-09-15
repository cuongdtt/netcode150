# Command Reference - Automated Template Selection

## 🚀 Quick Command Guide

This repository uses **automated prompt template selection**. When you type specific commands, the corresponding template is automatically applied.

## Command Patterns

### Generation Commands
**Pattern**: `gen {number}` or `generate {number}`
- **Auto-applies**: `@docs/leetcode-prompt-template.md`
- **Action**: Creates problem setup files (.js, .test.js, .md)
- **Example**: `gen 347` → Generates Top K Frequent Elements setup

**Aliases**: `gen`, `generate`, `create`, `setup`

### Analysis Commands  
**Pattern**: `check {number}` or `analyze {number}`
- **Auto-applies**: `@docs/check-prompt-template.md`
- **Action**: Analyzes existing solution and runs tests
- **Example**: `check 1343` → Analyzes sliding window solution

**Aliases**: `check`, `analyze`, `verify`, `test`, `validate`

### Solution Commands
**Pattern**: `solution {number}` or `solve {number}`
- **Auto-applies**: `@docs/solution-prompt-template.md`  
- **Action**: Generates AI-powered solutions with multiple approaches
- **Example**: `solution 167` → Creates two-pointer solutions

**Aliases**: `solution`, `solve`, `implement`, `code`

### Template Commands
**Pattern**: `problem {number}` or `template {number}`
- **Auto-applies**: `@docs/problem-template.md`
- **Action**: Creates basic problem structure template
- **Example**: `problem 704` → Creates binary search template

**Aliases**: `problem`, `template`, `structure`

## How It Works

```
User Input: "gen 347"
    ↓
System: Detects "gen {number}" pattern
    ↓
Auto-Apply: @docs/leetcode-prompt-template.md
    ↓
Execute: Complete problem generation workflow
    ↓
Result: Files created in problems/heap/ folder
```

## Key Features

✅ **No Confirmation Needed** - Templates apply automatically
✅ **Multiple Aliases** - Use whatever command feels natural  
✅ **Pattern Recognition** - Works with variations like "generate 123"
✅ **Complete Workflows** - Follows entire template process
✅ **Error Handling** - Clear feedback if something goes wrong

## Examples in Action

```bash
# Generate new problem
gen 704                    # → leetcode-prompt-template.md
generate 347              # → leetcode-prompt-template.md

# Analyze existing solution  
check 1343                # → check-prompt-template.md
verify 167                # → check-prompt-template.md

# Create AI solutions
solution 3                # → solution-prompt-template.md  
solve 121                 # → solution-prompt-template.md

# Basic templates
problem 658               # → problem-template.md
template 209              # → problem-template.md
```

## Template Files Location

All templates are stored in the `docs/` folder:
- `docs/leetcode-prompt-template.md` - Problem generation
- `docs/check-prompt-template.md` - Solution analysis  
- `docs/solution-prompt-template.md` - AI solution generation
- `docs/problem-template.md` - Basic structure template

## Configuration Files

The automation is configured in:
- `.cursorrules` - Cursor IDE rules
- `CLAUDE.md` - Claude AI instructions
- `docs/COMMAND_REFERENCE.md` - This reference guide

---

**Need help?** Just type any of the command patterns above with a LeetCode problem number!
