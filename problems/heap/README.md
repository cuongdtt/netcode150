# Heap Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all heap (priority queue) problems.

## Heap Best Practices

### Core Structure
```javascript
// JavaScript doesn't have built-in heap, so we implement or use library
// Min heap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }
    
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }
    
    heapifyUp(i) {
        while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
            [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
            i = this.parent(i);
        }
    }
    
    heapifyDown(i) {
        let minIndex = i;
        const l = this.left(i);
        const r = this.right(i);
        
        if (l < this.heap.length && this.heap[l] < this.heap[minIndex]) {
            minIndex = l;
        }
        
        if (r < this.heap.length && this.heap[r] < this.heap[minIndex]) {
            minIndex = r;
        }
        
        if (i !== minIndex) {
            [this.heap[i], this.heap[minIndex]] = [this.heap[minIndex], this.heap[i]];
            this.heapifyDown(minIndex);
        }
    }
    
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    
    size() {
        return this.heap.length;
    }
}
```

### Common Heap Patterns
1. **Top K Elements**: Use min heap of size K
2. **Kth Largest/Smallest**: Use max heap for Kth largest, min heap for Kth smallest
3. **Merge K Sorted Lists**: Use min heap to track heads
4. **Sliding Window Maximum**: Use deque or max heap
5. **Meeting Rooms**: Use min heap to track end times

### Heap Use Cases
```javascript
// Top K frequent elements
function topKFrequent(nums, k) {
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    // Use min heap of size k
    const minHeap = new MinHeap();
    
    for (const [num, count] of freq) {
        minHeap.insert([count, num]);
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }
    
    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.extractMin()[1]);
    }
    
    return result.reverse();
}

// Merge k sorted lists
function mergeKLists(lists) {
    const minHeap = new MinHeap();
    
    // Add first node of each list to heap
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            minHeap.insert([lists[i].val, i, lists[i]]);
        }
    }
    
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (minHeap.size() > 0) {
        const [val, listIndex, node] = minHeap.extractMin();
        
        current.next = node;
        current = current.next;
        
        if (node.next) {
            minHeap.insert([node.next.val, listIndex, node.next]);
        }
    }
    
    return dummy.next;
}
```

### When to Use Heaps
- Finding top K elements
- Maintaining sorted order while inserting/removing
- Scheduling problems (priority queues)
- Graph algorithms (Dijkstra, Prim)
- Stream processing (median finding)

### Time/Space Complexity
- **Insert**: O(log n)
- **Extract Min/Max**: O(log n)
- **Peek**: O(1)
- **Build Heap**: O(n)
- **Space**: O(n)

### Heap vs Other Data Structures
- **vs Sorted Array**: Heap allows O(log n) insertion vs O(n)
- **vs Binary Search Tree**: Heap guarantees O(log n) operations, BST can degrade to O(n)
- **vs Hash Table**: Heap maintains order, hash table doesn't

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