# 704. Binary Search

## Problem Description

Given an array of integers `nums` sorted in ascending order, and an integer `target`, write a function to search for `target` in `nums`. If `target` exists, return its index; otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

## Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 < nums[i], target < 10^4`
- All integers in `nums` are **unique**.
- `nums` is sorted in **ascending** order.

## Examples

### Example 1:

**Input:** `nums = [-1,0,3,5,9,12], target = 9`
**Output:** `4`
**Explanation:** `9` exists in `nums` and its index is `4`

### Example 2:

**Input:** `nums = [-1,0,3,5,9,12], target = 2`
**Output:** `-1`
**Explanation:** `2` does not exist in `nums` so return `-1`

## Key Points

1. **Sorted Array**: The input array is guaranteed to be sorted in ascending order
2. **Unique Elements**: All integers in the array are unique
3. **Time Complexity**: Must achieve O(log n) runtime complexity
4. **Return Index**: Return the index if found, -1 if not found
5. **Binary Search**: Classic binary search algorithm implementation

## Algorithm Approach

- **Technique**: Binary Search with two pointers
- **Key Steps**: 
  1. Initialize left and right pointers
  2. Calculate middle index
  3. Compare middle element with target
  4. Adjust search space based on comparison
- **Data Structures**: Array indexing with integer pointers

## Time Complexity

- **Optimal**: O(log n) time complexity
- **Space Complexity**: O(1) space complexity
