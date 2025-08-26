# 3208. Alternating Groups II

## Problem Description

There is a circle of red and blue tiles. You are given an array of integers `colors` and an integer `k`. The color of tile `i` is represented by `colors[i]`:

- `colors[i] == 0` means that tile `i` is red.
- `colors[i] == 1` means that tile `i` is blue.

An alternating group is a contiguous subset of tiles in the circle with alternating colors (each tile has a different color from its adjacent tiles) and size `k`.

Return the number of alternating groups.

**Note** that since `colors` represents a circle, the first and last tiles are considered to be next to each other.

## Examples

### Example 1:

**Input:** colors = [0,1,0,1,0], k = 3
**Output:** 3

**Explanation:**
- Alternating groups: [0,1,0], [1,0,1], [0,1,0]

### Example 2:

**Input:** colors = [0,1,0,0,1,0,1], k = 6
**Output:** 2

**Explanation:**
- Alternating groups: [0,1,0,0,1,0] (not valid), [1,0,0,1,0,1] (not valid), [0,0,1,0,1,0] (not valid), [0,1,0,1,0,1], [1,0,1,0,1,0]

### Example 3:

**Input:** colors = [1,1,0,1], k = 4
**Output:** 1

## Constraints

- 3 ≤ colors.length ≤ 10^5
- 0 ≤ colors[i] ≤ 1
- 3 ≤ k ≤ colors.length