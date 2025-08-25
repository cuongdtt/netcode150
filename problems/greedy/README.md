# Greedy Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all greedy problems.


## Greedy Best Practices

### Core Concept
Greedy algorithms make locally optimal choices at each step, hoping to find a global optimum. The key is proving that local choices lead to optimal solutions.

### Greedy Choice Property
For a greedy algorithm to work:
1. **Greedy Choice Property**: Local optimal choice leads to global optimal solution
2. **Optimal Substructure**: Optimal solution contains optimal solutions to subproblems

### Common Greedy Patterns

#### 1. Interval Scheduling
```javascript
// Activity selection problem
function activitySelection(activities) {
    // Sort by end time
    activities.sort((a, b) => a.end - b.end);
    
    const selected = [activities[0]];
    let lastEnd = activities[0].end;
    
    for (let i = 1; i < activities.length; i++) {
        if (activities[i].start >= lastEnd) {
            selected.push(activities[i]);
            lastEnd = activities[i].end;
        }
    }
    
    return selected;
}

// Meeting rooms (minimum rooms needed)
function minMeetingRooms(intervals) {
    const events = [];
    
    for (const [start, end] of intervals) {
        events.push([start, 1]);  // Meeting starts
        events.push([end, -1]);   // Meeting ends
    }
    
    events.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]; // End before start
        return a[0] - b[0];
    });
    
    let rooms = 0, maxRooms = 0;
    for (const [time, event] of events) {
        rooms += event;
        maxRooms = Math.max(maxRooms, rooms);
    }
    
    return maxRooms;
}
```

#### 2. Huffman Coding (Optimal Merge Pattern)
```javascript
class Node {
    constructor(freq, char = null, left = null, right = null) {
        this.freq = freq;
        this.char = char;
        this.left = left;
        this.right = right;
    }
}

function huffmanCoding(frequencies) {
    const heap = new MinHeap();
    
    // Create leaf nodes
    for (const [char, freq] of Object.entries(frequencies)) {
        heap.insert([freq, new Node(freq, char)]);
    }
    
    // Build Huffman tree
    while (heap.size() > 1) {
        const [freq1, node1] = heap.extractMin();
        const [freq2, node2] = heap.extractMin();
        
        const merged = new Node(freq1 + freq2, null, node1, node2);
        heap.insert([freq1 + freq2, merged]);
    }
    
    const root = heap.extractMin()[1];
    
    // Generate codes
    const codes = {};
    function generateCodes(node, code = '') {
        if (node.char !== null) {
            codes[node.char] = code || '0';
            return;
        }
        
        generateCodes(node.left, code + '0');
        generateCodes(node.right, code + '1');
    }
    
    generateCodes(root);
    return codes;
}
```

#### 3. Fractional Knapsack
```javascript
function fractionalKnapsack(items, capacity) {
    // Sort by value-to-weight ratio
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
    
    let totalValue = 0;
    let remainingCapacity = capacity;
    
    for (const item of items) {
        if (item.weight <= remainingCapacity) {
            // Take entire item
            totalValue += item.value;
            remainingCapacity -= item.weight;
        } else {
            // Take fraction of item
            totalValue += (item.value / item.weight) * remainingCapacity;
            break;
        }
    }
    
    return totalValue;
}
```

#### 4. Minimum Spanning Tree (Prim's)
```javascript
function primMST(graph) {
    const visited = new Set();
    const minHeap = new MinHeap();
    const mst = [];
    let totalWeight = 0;
    
    // Start with arbitrary vertex
    const start = Object.keys(graph)[0];
    visited.add(start);
    
    // Add all edges from start vertex
    for (const [neighbor, weight] of graph[start]) {
        minHeap.insert([weight, start, neighbor]);
    }
    
    while (minHeap.size() > 0 && visited.size < Object.keys(graph).length) {
        const [weight, u, v] = minHeap.extractMin();
        
        if (visited.has(v)) continue;
        
        // Add edge to MST
        visited.add(v);
        mst.push([u, v, weight]);
        totalWeight += weight;
        
        // Add new edges
        for (const [neighbor, edgeWeight] of graph[v] || []) {
            if (!visited.has(neighbor)) {
                minHeap.insert([edgeWeight, v, neighbor]);
            }
        }
    }
    
    return { mst, totalWeight };
}
```

### Problem Categories
1. **Activity Selection**: Choose maximum non-overlapping activities
2. **Job Scheduling**: Minimize completion time, maximize profit
3. **Fractional Knapsack**: Maximize value within weight constraint
4. **Minimum Spanning Tree**: Connect all vertices with minimum total weight
5. **Huffman Coding**: Optimal prefix-free encoding
6. **Coin Change**: Minimum coins (for specific coin systems)

### Proving Greedy Correctness
1. **Exchange Argument**: Show that any optimal solution can be modified to match greedy choice
2. **Induction**: Prove that greedy maintains optimal substructure
3. **Cut-and-Paste**: Show greedy choice preserves optimality

### Common Greedy Strategies
1. **Sort by Ratio**: Value/weight, deadline, etc.
2. **Earliest Deadline First**: Minimize lateness
3. **Shortest Processing Time**: Minimize average completion time
4. **Exchange Arguments**: Prove optimality by contradiction

### When Greedy Works
- Problem has greedy choice property
- Optimal substructure exists
- Local choices don't affect future options
- Can prove correctness (exchange argument, induction)

### When Greedy Fails
- 0/1 Knapsack (need dynamic programming)
- Longest Path in general graphs
- Graph coloring with minimum colors
- Traveling Salesman Problem

### Time/Space Complexity
- **Sorting-based**: Usually O(n log n) due to sorting
- **Heap-based**: O(n log n) for n operations
- **Space**: Usually O(1) to O(n) depending on data structures used
- **Advantage**: Often much faster than DP or backtracking

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