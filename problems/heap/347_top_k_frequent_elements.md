# 347. Top K Frequent Elements

## Problem Description

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in **any order**.

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `k` is in the range `[1, the number of unique elements in the array]`
- It is **guaranteed** that the answer is **unique**.

## Examples

### Example 1:

**Input:** `nums = [1,1,1,2,2,3], k = 2`
**Output:** `[1,2]`

### Example 2:

**Input:** `nums = [1], k = 1`
**Output:** `[1]`

## Key Points

1. **Frequency Counting**: Need to count how often each element appears
2. **Top K Selection**: Find the k elements with highest frequencies
3. **Any Order**: Result can be returned in any order
4. **Unique Answer**: The answer is guaranteed to be unique
5. **Efficient Solution**: Should handle up to 10^5 elements efficiently

## Algorithm Approach

- **Technique**: Hash Map + Heap (Min-Heap or Max-Heap)
- **Key Steps**: 
  1. Count frequencies using hash map
  2. Use heap to maintain top k frequent elements
  3. Extract results from heap
- **Data Structures**: Hash Map for counting, Heap for top-k selection

## Alternative Approaches

1. **Min-Heap Approach**: O(n log k) time, O(n + k) space
2. **Max-Heap Approach**: O(n log n) time, O(n) space  
3. **Bucket Sort**: O(n) time, O(n) space
4. **Quick Select**: O(n) average time, O(n) space

## Time Complexity

- **Optimal**: O(n log k) time complexity using min-heap
- **Space Complexity**: O(n + k) space complexity
