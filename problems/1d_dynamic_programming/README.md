# 1D Dynamic Programming Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all one-dimensional dynamic programming problems.

## Problems in This Category

*No problems currently implemented*

## 1D Dynamic Programming Best Practices

### Core Concepts
1D Dynamic Programming involves problems where the state can be represented by a single parameter, typically an index or position in an array.

**Key Characteristics:**
- **State**: `dp[i]` represents the solution for the first i elements or up to position i
- **Recurrence**: `dp[i]` depends on previous states like `dp[i-1]`, `dp[i-2]`, etc.
- **Space Optimization**: Often can reduce from O(n) to O(1) by keeping only necessary previous values

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

### Common 1D DP Patterns

#### 1. Linear Sequence Problems
```javascript
// Template: Each element depends on previous elements
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

// Example: House Robber
function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev2 = 0, prev1 = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}
```

#### 2. Climbing/Counting Problems
```javascript
// Template: Ways to reach position i
function climbStairs(n) {
    if (n <= 2) return n;
    
    let prev2 = 1, prev1 = 2;
    
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// Coin Change - minimum coins
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}
```

#### 3. Subsequence Problems
```javascript
// Longest Increasing Subsequence
function lengthOfLIS(nums) {
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
}

// Optimized O(n log n) version using binary search
function lengthOfLISOptimized(nums) {
    const tails = [];
    
    for (const num of nums) {
        let left = 0, right = tails.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }
    
    return tails.length;
}
```

### Problem Categories
1. **Fibonacci-like**: Each state depends on previous 1-2 states
2. **Optimization**: Find minimum/maximum value (House Robber, Maximum Subarray)
3. **Counting**: Number of ways to achieve something (Climbing Stairs, Coin Change Ways)
4. **Decision**: Can we achieve a target? (Subset Sum, Perfect Squares)
5. **Subsequences**: Problems involving sequences (LIS, LCS with 1D optimization)

### Space Optimization Techniques
```javascript
// From O(n) to O(1) - when only need previous few states
function optimizedDP(arr) {
    // Instead of: const dp = new Array(n);
    let prev2 = 0, prev1 = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        const current = Math.max(prev1, prev2 + arr[i]);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// Rolling array - when need more than 2 previous states
function rollingArray(arr, k) {
    const dp = new Array(k);
    // Initialize base cases...
    
    for (let i = k; i < arr.length; i++) {
        dp[i % k] = /* compute based on dp[(i-1) % k], dp[(i-2) % k], ... */;
    }
    
    return dp[(arr.length - 1) % k];
}
```

### When to Use 1D DP
- State can be represented by single parameter (index, sum, etc.)
- Each state depends on previous states in a linear fashion
- Problem involves sequences, arrays, or linear structures
- Optimal substructure exists with linear dependency

### Time/Space Complexity
- **Time**: Usually O(n) to O(n²) depending on transitions
- **Space**: O(n) for tabulation, can often optimize to O(1)
- **Memoization**: O(n) space for recursion stack + memo table

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