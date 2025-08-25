# Backtracking Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all backtracking problems.

## Backtracking Best Practices

### Core Concept
Backtracking is a systematic way to iterate through all possible solutions by building candidates incrementally and abandoning candidates ("backtracking") when they cannot lead to a valid solution.

### Basic Template
```javascript
function backtrack(result, currentSolution, ...parameters) {
    // Base case - found a complete solution
    if (isComplete(currentSolution)) {
        result.push([...currentSolution]); // Make a copy
        return;
    }
    
    // Generate all possible candidates for next step
    const candidates = getCandidates(currentSolution, ...parameters);
    
    for (const candidate of candidates) {
        // Choose: add candidate to current solution
        currentSolution.push(candidate);
        
        // Explore: recursively try this path
        if (isValid(currentSolution, ...parameters)) {
            backtrack(result, currentSolution, ...parameters);
        }
        
        // Unchoose: remove candidate (backtrack)
        currentSolution.pop();
    }
}
```

### Common Backtracking Patterns

#### 1. Permutations
```javascript
function permute(nums) {
    const result = [];
    const used = new Array(nums.length).fill(false);
    
    function backtrack(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            
            current.push(nums[i]);
            used[i] = true;
            
            backtrack(current);
            
            current.pop();
            used[i] = false;
        }
    }
    
    backtrack([]);
    return result;
}
```

#### 2. Combinations
```javascript
function combine(n, k) {
    const result = [];
    
    function backtrack(start, current) {
        if (current.length === k) {
            result.push([...current]);
            return;
        }
        
        for (let i = start; i <= n; i++) {
            current.push(i);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(1, []);
    return result;
}
```

#### 3. Subsets
```javascript
function subsets(nums) {
    const result = [];
    
    function backtrack(start, current) {
        result.push([...current]);
        
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}
```

#### 4. N-Queens
```javascript
function solveNQueens(n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    
    function isValid(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        // Check diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
        // Check anti-diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        
        return true;
    }
    
    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    backtrack(0);
    return result;
}
```

### Problem Categories
1. **Permutations**: Arrange elements in all possible orders
2. **Combinations**: Select k elements from n elements
3. **Subsets**: Generate all possible subsets
4. **Constraint Satisfaction**: N-Queens, Sudoku solver
5. **Path Finding**: Find all paths in maze/grid
6. **Partitioning**: Partition string/array with constraints

### Optimization Techniques
1. **Pruning**: Skip branches that cannot lead to valid solutions
2. **Early Termination**: Stop when first solution found (if only one needed)
3. **Constraint Propagation**: Use constraints to reduce search space
4. **Ordering**: Choose variables/values in smart order

### Common Mistakes
1. **Shallow Copy**: Forgetting to copy arrays/objects when adding to result
2. **Not Backtracking**: Forgetting to undo changes after recursive call
3. **Wrong Base Case**: Incorrect termination condition
4. **Inefficient Pruning**: Not pruning invalid branches early enough

### When to Use Backtracking
- Need to find all possible solutions
- Problem involves making a sequence of choices
- Constraints can be checked incrementally
- Brute force is too slow but systematic search is needed
- Problem has a tree-like solution space

### Time/Space Complexity
- **Time**: Often exponential O(b^d) where b is branching factor, d is depth
- **Space**: O(d) for recursion stack plus space for storing solutions
- **Optimization**: Good pruning can significantly reduce actual runtime

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