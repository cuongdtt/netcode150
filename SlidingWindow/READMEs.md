# Sliding Window Technique

## Overview

The Sliding Window technique is an algorithmic approach that uses a window (subarray/substring) that slides through a data structure to solve problems efficiently. It's particularly useful for problems involving contiguous elements and can often reduce time complexity from O(n²) or O(n³) to O(n).

## When to Use Sliding Window

### ✅ **Good for:**
- **Subarray/substring problems**
- **Contiguous elements**
- **Optimization problems** (min/max)
- **Problems with constraints** (sum, length, etc.)
- **String problems** (longest substring, pattern matching)
- **Array problems** (sum, average, min/max in window)

### ❌ **Not suitable for:**
- **Non-contiguous elements**
- **Permutation problems**
- **Problems requiring backtracking**
- **Problems with complex dependencies**

## Types of Sliding Window

### 1. Fixed Size Window
The window size remains constant throughout the algorithm.

**Example: Find maximum sum of k consecutive elements**

### 2. Variable Size Window
The window size changes based on conditions.

**Example: Find smallest subarray with sum >= target**

### 3. Two Pointers (Single Pass)
One pointer tracks a condition, another scans forward.

## Common Sliding Window Patterns

### 1. Maximum/Minimum in Window

### 2. Longest Substring Without Repeating Characters

### 3. Minimum Window Substring

### 4. Sliding Window with Hash Map