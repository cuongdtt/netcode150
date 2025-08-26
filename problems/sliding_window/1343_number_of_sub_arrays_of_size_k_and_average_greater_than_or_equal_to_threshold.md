# 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

## Problem Description

Given an array of integers `arr` and two integers `k` and `threshold`, return the number of sub-arrays of size `k` and average greater than or equal to `threshold`.

## Examples

### Example 1:

**Input:** arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
**Output:** 3

**Explanation:** 
- Sub-arrays [2,2,2], [2,2,5], [2,5,5], [5,5,5], [5,5,8], [5,8] have averages 2, 3, 4, 5, 6, 6.5 respectively.
- All sub-arrays with an average greater than or equal to 4 have averages 4, 5, 6, 6.5.
- There are 3 sub-arrays with size 3 and average >= 4.

### Example 2:

**Input:** arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
**Output:** 6

**Explanation:** 
- The first 6 sub-arrays of size 3 have averages greater than 5.
- Note that averages are not integers.

## Constraints

- 1 ≤ arr.length ≤ 10^5
- 1 ≤ arr[i] ≤ 10^4
- 1 ≤ k ≤ arr.length
- 0 ≤ threshold ≤ 10^4