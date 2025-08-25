# Intervals Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all interval problems.


## Intervals Best Practices

### Core Concepts
Interval problems involve working with ranges of values, typically represented as [start, end] pairs. Common operations include merging, intersection, and scheduling.

### Common Interval Patterns

#### 1. Merge Intervals
```javascript
function merge(intervals) {
    if (intervals.length <= 1) return intervals;
    
    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = merged[merged.length - 1];
        
        if (current[0] <= last[1]) {
            // Overlapping intervals - merge them
            last[1] = Math.max(last[1], current[1]);
        } else {
            // Non-overlapping - add new interval
            merged.push(current);
        }
    }
    
    return merged;
}
```

#### 2. Insert Interval
```javascript
function insert(intervals, newInterval) {
    const result = [];
    let i = 0;
    
    // Add all intervals that end before newInterval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    
    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
}
```

#### 3. Interval Intersection
```javascript
function intervalIntersection(firstList, secondList) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < firstList.length && j < secondList.length) {
        const [start1, end1] = firstList[i];
        const [start2, end2] = secondList[j];
        
        // Check if intervals overlap
        const overlapStart = Math.max(start1, start2);
        const overlapEnd = Math.min(end1, end2);
        
        if (overlapStart <= overlapEnd) {
            result.push([overlapStart, overlapEnd]);
        }
        
        // Move pointer of interval that ends earlier
        if (end1 < end2) {
            i++;
        } else {
            j++;
        }
    }
    
    return result;
}
```

#### 4. Non-overlapping Intervals (Greedy)
```javascript
function eraseOverlapIntervals(intervals) {
    if (intervals.length <= 1) return 0;
    
    // Sort by end time (greedy choice)
    intervals.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let end = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            // Overlapping interval - need to remove
            count++;
        } else {
            // Non-overlapping - update end
            end = intervals[i][1];
        }
    }
    
    return count;
}
```

#### 5. Meeting Rooms
```javascript
// Meeting Rooms I - can attend all meetings?
function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i-1][1]) {
            return false; // Overlap detected
        }
    }
    
    return true;
}

// Meeting Rooms II - minimum rooms needed
function minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;
    
    const starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);
    
    let rooms = 0;
    let endPointer = 0;
    
    for (let i = 0; i < starts.length; i++) {
        if (starts[i] >= ends[endPointer]) {
            endPointer++; // A meeting ended, room becomes available
        } else {
            rooms++; // Need a new room
        }
    }
    
    return rooms;
}
```

#### 6. Sweep Line Algorithm
```javascript
// General sweep line for interval problems
function sweepLine(intervals) {
    const events = [];
    
    // Create events for start and end of intervals
    for (const [start, end] of intervals) {
        events.push([start, 'start']);
        events.push([end, 'end']);
    }
    
    // Sort events (handle ties appropriately)
    events.sort((a, b) => {
        if (a[0] === b[0]) {
            // If same time, process 'end' before 'start'
            return a[1] === 'end' ? -1 : 1;
        }
        return a[0] - b[0];
    });
    
    let activeIntervals = 0;
    let maxActive = 0;
    
    for (const [time, type] of events) {
        if (type === 'start') {
            activeIntervals++;
            maxActive = Math.max(maxActive, activeIntervals);
        } else {
            activeIntervals--;
        }
    }
    
    return maxActive;
}
```

### Problem Categories
1. **Merging**: Combine overlapping intervals
2. **Insertion**: Add interval to sorted list
3. **Intersection**: Find common parts of intervals
4. **Scheduling**: Meeting rooms, non-overlapping intervals
5. **Coverage**: Minimum intervals to cover range
6. **Sweep Line**: Process events in chronological order

### Key Techniques
1. **Sorting**: Usually by start or end time
2. **Two Pointers**: For intersection problems
3. **Greedy**: Choose intervals that end earliest
4. **Sweep Line**: Process events chronologically
5. **Priority Queue**: For complex scheduling problems

### Sorting Strategies
- **Sort by start**: For merging, basic overlap detection
- **Sort by end**: For greedy scheduling (maximum activities)
- **Sort by duration**: For some optimization problems
- **Events array**: Convert to events and sort by time

### Common Pitfalls
1. **Boundary conditions**: Handle touching intervals correctly
2. **Empty intervals**: Check for valid intervals
3. **Sorting order**: Choose appropriate sorting criteria
4. **Tie handling**: Process events in correct order when times are equal

### When to Use Different Approaches
- **Simple merge**: When just combining overlapping intervals
- **Greedy**: For optimization problems (max activities, min removals)
- **Two pointers**: For intersection of two sorted lists
- **Sweep line**: For complex problems involving multiple events
- **Priority queue**: When need to track earliest ending intervals

### Time/Space Complexity
- **Sorting**: O(n log n) time, O(1) extra space
- **Merging**: O(n log n) time, O(n) space for result
- **Two pointers**: O(m + n) time after sorting
- **Sweep line**: O(n log n) time, O(n) space for events

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