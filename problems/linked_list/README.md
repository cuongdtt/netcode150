# Linked List Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all linked list problems.

## Linked List Best Practices

### Core Structure
```javascript
// Definition for singly-linked list node
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
```

### Common Patterns
1. **Two Pointers (Fast & Slow)**: Cycle detection, finding middle
2. **Dummy Head**: Simplifies edge cases when modifying head
3. **Iterative vs Recursive**: Choose based on space constraints
4. **In-place Manipulation**: Modify links without extra space

### Essential Techniques
```javascript
// Dummy head pattern
function processLinkedList(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    
    // Process the list
    while (current.next) {
        // Modify links as needed
        current = current.next;
    }
    
    return dummy.next; // Return new head
}

// Two pointers (Floyd's algorithm)
function hasCycle(head) {
    let slow = head, fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    
    return false;
}

// Reverse linked list iteratively
function reverseList(head) {
    let prev = null, current = head;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev; // New head
}
```

### Common Problem Types
1. **Reversal**: Reverse entire list or portions
2. **Cycle Detection**: Find if cycle exists, find cycle start
3. **Merging**: Merge sorted lists, merge k lists
4. **Intersection**: Find intersection point of two lists
5. **Removal**: Remove duplicates, remove nth node
6. **Reordering**: Rearrange nodes in specific pattern

### When to Use Different Approaches
- **Dummy Head**: When head might change (insertion/deletion at start)
- **Two Pointers**: Cycle detection, finding middle, nth from end
- **Recursion**: Tree-like operations, when stack space isn't concern
- **Iterative**: When space complexity matters (O(1) vs O(n))

### Time/Space Complexity
- **Traversal**: O(n) time, O(1) space
- **Insertion/Deletion**: O(1) if position known, O(n) to find position
- **Recursive solutions**: O(n) space due to call stack
- **Iterative solutions**: Usually O(1) space

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