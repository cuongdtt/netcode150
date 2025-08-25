# LeetCode Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all problems in this repository.

## Problem Categories

### Arrays
- **1_two_sum**: [Status: TODO]
- **49_group_anagrams**: [Status: TODO]

### Sliding Window
- **3_longest_substring_without_repeating_characters**: [Status: Implemented]
  - **Algorithm**: Sliding window with hash set
  - **Approach**: Use left/right pointers and set to track characters in current window
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(min(m,n)) where m is charset size
  - **Key Insight**: Shrink window when duplicate found

- **121_best_time_to_buy_and_sell_stock**: [Status: Implemented]
  - **Algorithm**: Single pass tracking minimum price
  - **Approach**: Track min price seen so far, calculate max profit at each step
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(1)
  - **Key Insight**: Only need to track minimum price, not all previous prices

- **209_minimum_size_subarray_sum**: [Status: Implemented]
  - **Algorithm**: Sliding window
  - **Approach**: Expand window until sum >= target, then shrink while maintaining condition
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(1)
  - **Key Insight**: Each element visited at most twice (once by each pointer)

- **219_contains_duplicate_ii**: [Status: Implemented]
  - **Algorithm**: Sliding window with hash map
  - **Approach**: Track indices of elements in current window of size k
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(min(n,k))
  - **Key Insight**: Maintain window of size k and check for duplicates within it

- **424_longest_repeating_character_replacement**: [Status: TODO]
  - **Algorithm**: Sliding window with character frequency tracking
  - **Approach**: Maintain window where (window_size - max_frequency) <= k
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(1) - at most 26 characters
  - **Key Insight**: Number of replacements = window size - most frequent character

- **576_permutation_in_string**: [Status: Implemented]
  - **Algorithm**: Sliding window with frequency comparison
  - **Approach**: Fixed window of s1.length, compare character frequencies
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(1) - fixed size frequency array
  - **Key Insight**: Use fixed-size window and frequency matching

- **643_maximum_average_subarray_i**: [Status: Implemented]
  - **Algorithm**: Sliding window
  - **Approach**: Fixed window of size k, slide and track maximum sum
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(1)
  - **Key Insight**: Only need to update sum by removing/adding one element at a time

- **3364_minimum_positive_sum_subarray**: [Status: Implemented]
  - **Algorithm**: Brute force with optimizations
  - **Approach**: Check all subarrays of length l to r, track minimum positive sum
  - **Time Complexity**: O(n³) or O(n²) with prefix sums
  - **Space Complexity**: O(1) or O(n) with prefix sums
  - **Key Insight**: Use prefix sums to calculate subarray sums efficiently

- **3411_maximum_subarray_with_equal_products**: [Status: TODO]
  - **Algorithm**: TBD
  - **Approach**: TBD
  - **Time Complexity**: TBD
  - **Space Complexity**: TBD
  - **Key Insight**: TBD

### Two Pointers
- [No problems currently implemented]

### Stack
- [No problems currently implemented]

### Binary Search
- [No problems currently implemented]

### Linked List
- [No problems currently implemented]

### Trees
- [No problems currently implemented]

### Tries
- [No problems currently implemented]

### Heap
- [No problems currently implemented]

### Backtracking
- [No problems currently implemented]

### Graphs
- [No problems currently implemented]

### Advanced Graphs
- [No problems currently implemented]

### Dynamic Programming
- [No problems currently implemented]

### Greedy
- [No problems currently implemented]

### Intervals
- [No problems currently implemented]

### Math
- [No problems currently implemented]

### Bit Manipulation
- [No problems currently implemented]

## Status Legend
- **TODO**: Problem setup exists, implementation needed
- **Implemented**: Solution completed and tested
- **Optimized**: Multiple solutions with different approaches
- **Review**: Needs code review or optimization

## Usage Notes
- When implementing a problem, update the corresponding entry with algorithm details
- Include time/space complexity analysis
- Add key insights that helped solve the problem
- Mark status as appropriate (TODO → Implemented → Optimized)

## Problem Tracking Template
```
- **{number}_{problem_name}**: [Status: TODO/Implemented/Optimized/Review]
  - **Algorithm**: Brief description of main algorithm used
  - **Approach**: Step-by-step approach description
  - **Time Complexity**: Big O notation
  - **Space Complexity**: Big O notation
  - **Key Insight**: Main insight that makes the solution work
```