# Dynamic Programming Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all dynamic programming problems.

## Dynamic Programming Best Practices

### Core Concepts
Dynamic Programming (DP) solves problems by breaking them into subproblems and storing results to avoid recomputation.

**Key Elements:**
1. **Optimal Substructure**: Solution can be constructed from optimal solutions of subproblems
2. **Overlapping Subproblems**: Same subproblems are solved multiple times
3. **State**: Variables that uniquely identify a subproblem
4. **Transition**: How to compute current state from previous states

### DP Approaches
```javascript
// 1. Top-down (Memoization)
function fibMemo(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

// 2. Bottom-up (Tabulation)
function fibTab(n) {
    if (n <= 1) return n;
    
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// 3. Space-optimized
function fibOptimized(n) {
    if (n <= 1) return n;
    
    let prev2 = 0, prev1 = 1;
    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}
```

### Common DP Patterns

#### 1. Linear DP (1D)
- **State**: `dp[i]` represents solution for first i elements
- **Examples**: Fibonacci, climbing stairs, house robber

#### 2. Grid DP (2D)
- **State**: `dp[i][j]` represents solution for grid position (i,j)
- **Examples**: Unique paths, minimum path sum, edit distance

#### 3. Knapsack DP
- **0/1 Knapsack**: Each item can be taken at most once
- **Unbounded Knapsack**: Each item can be taken unlimited times
- **Examples**: Subset sum, coin change, partition problem

#### 4. String DP
- **State**: Often `dp[i][j]` for strings of length i and j
- **Examples**: Longest common subsequence, edit distance, palindrome

#### 5. Tree/Graph DP
- **State**: DP on tree nodes or graph vertices
- **Examples**: Binary tree maximum path sum, longest path in DAG

### Problem-Solving Steps
1. **Identify DP**: Look for optimal substructure and overlapping subproblems
2. **Define State**: What parameters uniquely identify a subproblem?
3. **Find Recurrence**: How does current state relate to previous states?
4. **Handle Base Cases**: What are the simplest cases?
5. **Choose Implementation**: Top-down vs bottom-up
6. **Optimize Space**: Can we reduce space complexity?

### Common DP Templates
```javascript
// Template 1: 1D DP
function solve1D(arr) {
    const n = arr.length;
    const dp = new Array(n);
    
    // Base case
    dp[0] = arr[0];
    
    // Fill dp array
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i-1], arr[i]); // Example transition
    }
    
    return dp[n-1];
}

// Template 2: 2D DP
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
```

### Time/Space Complexity
- **Time**: Usually O(number of states × time per state)
- **Space**: O(number of states) for memoization, often optimizable to O(few variables)
- **Optimization**: Space can often be reduced from O(n²) to O(n) or O(1)

### When to Use DP
- Problem has optimal substructure
- Overlapping subproblems exist
- Brute force has exponential time complexity
- Need to find optimal solution (min/max/count)
- Problem involves choices at each step

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