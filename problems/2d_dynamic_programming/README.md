# 2D Dynamic Programming Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all two-dimensional dynamic programming problems.

## Problems in This Category

*No problems currently implemented*

## 2D Dynamic Programming Best Practices

### Core Concepts
2D Dynamic Programming involves problems where the state requires two parameters to uniquely identify a subproblem, typically represented as `dp[i][j]`.

**Key Characteristics:**
- **State**: `dp[i][j]` represents solution for subproblem defined by parameters i and j
- **Recurrence**: `dp[i][j]` depends on neighboring states like `dp[i-1][j]`, `dp[i][j-1]`, etc.
- **Space Optimization**: Often can reduce from O(mn) to O(n) or O(m) using rolling arrays

### Common 2D DP Templates
```javascript
// Template 1: Grid-based DP
function solve2D(grid) {
    const m = grid.length, n = grid[0].length;
    const dp = Array(m).fill().map(() => Array(n).fill(0));
    
    // Base cases
    dp[0][0] = grid[0][0];
    
    // Fill first row and column
    for (let i = 1; i < m; i++) dp[i][0] = dp[i-1][0] + grid[i][0];
    for (let j = 1; j < n; j++) dp[0][j] = dp[0][j-1] + grid[0][j];
    
    // Fill rest of dp table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    
    return dp[m-1][n-1];
}

// Template 2: String matching DP
function stringDP(s1, s2) {
    const m = s1.length, n = s2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Base cases
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    // Fill dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i-1] === s2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
            }
        }
    }
    
    return dp[m][n];
}
```

### Common 2D DP Patterns

#### 1. Grid Path Problems
```javascript
// Unique Paths
function uniquePaths(m, n) {
    const dp = Array(m).fill().map(() => Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
}

// Minimum Path Sum
function minPathSum(grid) {
    const m = grid.length, n = grid[0].length;
    
    // Modify grid in-place to save space
    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i-1][0];
    }
    for (let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j-1];
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }
    
    return grid[m-1][n-1];
}

// Space-optimized version
function minPathSumOptimized(grid) {
    const n = grid[0].length;
    const dp = [...grid[0]];
    
    for (let j = 1; j < n; j++) {
        dp[j] += dp[j-1];
    }
    
    for (let i = 1; i < grid.length; i++) {
        dp[0] += grid[i][0];
        for (let j = 1; j < n; j++) {
            dp[j] = Math.min(dp[j], dp[j-1]) + grid[i][j];
        }
    }
    
    return dp[n-1];
}
```

#### 2. String/Sequence Matching
```javascript
// Longest Common Subsequence
function longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[m][n];
}

// Edit Distance (Levenshtein)
function minDistance(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Base cases
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(
                    dp[i-1][j] + 1,     // delete
                    dp[i][j-1] + 1,     // insert
                    dp[i-1][j-1] + 1    // replace
                );
            }
        }
    }
    
    return dp[m][n];
}
```

#### 3. Knapsack Problems
```javascript
// 0/1 Knapsack
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            // Don't take item i-1
            dp[i][w] = dp[i-1][w];
            
            // Take item i-1 if possible
            if (weights[i-1] <= w) {
                dp[i][w] = Math.max(
                    dp[i][w],
                    dp[i-1][w - weights[i-1]] + values[i-1]
                );
            }
        }
    }
    
    return dp[n][capacity];
}

// Space-optimized knapsack
function knapsackOptimized(weights, values, capacity) {
    const dp = new Array(capacity + 1).fill(0);
    
    for (let i = 0; i < weights.length; i++) {
        // Traverse backwards to avoid using updated values
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }
    
    return dp[capacity];
}
```

#### 4. Range/Interval DP
```javascript
// Matrix Chain Multiplication
function matrixChainOrder(dims) {
    const n = dims.length - 1;
    const dp = Array(n).fill().map(() => Array(n).fill(0));
    
    // Length of chain
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            dp[i][j] = Infinity;
            
            for (let k = i; k < j; k++) {
                const cost = dp[i][k] + dp[k+1][j] + dims[i] * dims[k+1] * dims[j+1];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }
    
    return dp[0][n-1];
}

// Palindromic Substring
function longestPalindromicSubstring(s) {
    const n = s.length;
    const dp = Array(n).fill().map(() => Array(n).fill(false));
    let start = 0, maxLen = 1;
    
    // Single characters are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    
    // Check for palindromes of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLen = 2;
        }
    }
    
    // Check for palindromes of length 3+
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                if (len > maxLen) {
                    start = i;
                    maxLen = len;
                }
            }
        }
    }
    
    return s.substring(start, start + maxLen);
}
```

### Space Optimization Techniques
```javascript
// 2D to 1D optimization (when only need previous row)
function optimized2DTo1D(grid) {
    const n = grid[0].length;
    let prev = new Array(n).fill(0);
    let curr = new Array(n);
    
    // Initialize first row
    prev[0] = grid[0][0];
    for (let j = 1; j < n; j++) {
        prev[j] = prev[j-1] + grid[0][j];
    }
    
    for (let i = 1; i < grid.length; i++) {
        curr[0] = prev[0] + grid[i][0];
        for (let j = 1; j < n; j++) {
            curr[j] = Math.min(prev[j], curr[j-1]) + grid[i][j];
        }
        [prev, curr] = [curr, prev]; // Swap arrays
    }
    
    return prev[n-1];
}

// Rolling array when need multiple previous rows
function rollingArray2D(grid, k) {
    const m = grid.length, n = grid[0].length;
    const dp = Array(k).fill().map(() => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[i % k][j] = /* compute based on previous rows */;
        }
    }
    
    return dp[(m-1) % k][n-1];
}
```

### Problem Categories
1. **Grid Navigation**: Unique paths, minimum path sum, dungeon game
2. **String Matching**: LCS, edit distance, regex matching
3. **Knapsack Variants**: 0/1 knapsack, bounded/unbounded knapsack
4. **Range DP**: Matrix chain multiplication, burst balloons
5. **Game Theory**: Stone game, predict winner
6. **Optimization**: Maximum rectangle, largest square

### When to Use 2D DP
- Problem involves two sequences/strings
- Grid-based problems with position-dependent states
- Optimization problems with two parameters
- Range/interval problems
- Game theory with two players

### Time/Space Complexity
- **Time**: Usually O(mn) where m, n are the dimensions
- **Space**: O(mn) for tabulation, often optimizable to O(n) or O(m)
- **String problems**: Often O(mn) where m, n are string lengths
- **Grid problems**: O(mn) where m, n are grid dimensions

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