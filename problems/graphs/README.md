# Graphs Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all graph problems.


## Graphs Best Practices

### Graph Representations
```javascript
// 1. Adjacency List (most common)
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
};

// 2. Adjacency Matrix
const matrix = [
    [0, 1, 1, 0], // A connects to B, C
    [1, 0, 0, 1], // B connects to A, D
    [1, 0, 0, 1], // C connects to A, D
    [0, 1, 1, 0]  // D connects to B, C
];

// 3. Edge List
const edges = [
    ['A', 'B'], ['A', 'C'],
    ['B', 'D'], ['C', 'D']
];
```

### Core Graph Algorithms

#### Depth-First Search (DFS)
```javascript
function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start); // Process node
    
    for (const neighbor of graph[start] || []) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

// Iterative DFS
function dfsIterative(graph, start) {
    const visited = new Set();
    const stack = [start];
    
    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node); // Process node
            
            // Add neighbors to stack
            for (const neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}
```

#### Breadth-First Search (BFS)
```javascript
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    
    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node); // Process node
        
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// BFS for shortest path
function bfsShortestPath(graph, start, end) {
    const queue = [[start, [start]]];
    const visited = new Set([start]);
    
    while (queue.length > 0) {
        const [node, path] = queue.shift();
        
        if (node === end) {
            return path;
        }
        
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, [...path, neighbor]]);
            }
        }
    }
    
    return null; // No path found
}
```

#### Topological Sort
```javascript
// Kahn's Algorithm (BFS-based)
function topologicalSort(graph) {
    const inDegree = {};
    const result = [];
    
    // Calculate in-degrees
    for (const node in graph) {
        inDegree[node] = 0;
    }
    for (const node in graph) {
        for (const neighbor of graph[node]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }
    
    // Find nodes with no incoming edges
    const queue = [];
    for (const node in inDegree) {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    }
    
    // Process nodes
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        
        for (const neighbor of graph[node] || []) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return result;
}

// DFS-based topological sort
function topSortDFS(graph) {
    const visited = new Set();
    const stack = [];
    
    function dfs(node) {
        visited.add(node);
        
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        
        stack.push(node);
    }
    
    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }
    
    return stack.reverse();
}
```

#### Cycle Detection
```javascript
// Directed graph cycle detection
function hasCycleDFS(graph) {
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const colors = {};
    
    // Initialize all nodes as WHITE
    for (const node in graph) {
        colors[node] = WHITE;
    }
    
    function dfs(node) {
        colors[node] = GRAY;
        
        for (const neighbor of graph[node] || []) {
            if (colors[neighbor] === GRAY) {
                return true; // Back edge found - cycle detected
            }
            if (colors[neighbor] === WHITE && dfs(neighbor)) {
                return true;
            }
        }
        
        colors[node] = BLACK;
        return false;
    }
    
    for (const node in graph) {
        if (colors[node] === WHITE && dfs(node)) {
            return true;
        }
    }
    
    return false;
}

// Undirected graph cycle detection
function hasCycleUndirected(graph) {
    const visited = new Set();
    
    function dfs(node, parent) {
        visited.add(node);
        
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, node)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true; // Cycle found
            }
        }
        
        return false;
    }
    
    for (const node in graph) {
        if (!visited.has(node) && dfs(node, null)) {
            return true;
        }
    }
    
    return false;
}
```

### Common Graph Problem Patterns
1. **Traversal**: DFS, BFS for exploring graph
2. **Shortest Path**: BFS for unweighted, Dijkstra for weighted
3. **Cycle Detection**: DFS with coloring or parent tracking
4. **Connectivity**: Find connected components, bridges, articulation points
5. **Topological Ordering**: DAG ordering, dependency resolution
6. **Bipartite**: Two-coloring, matching problems

### Graph Problem Categories
1. **Tree Problems**: Special case of graphs (connected, acyclic)
2. **Grid Problems**: 2D matrix as implicit graph
3. **Social Network**: Friend relationships, influence
4. **Scheduling**: Task dependencies, course prerequisites
5. **Pathfinding**: Navigation, shortest routes
6. **Flow Networks**: Maximum flow, minimum cut

### When to Use Each Algorithm
- **DFS**: Cycle detection, topological sort, finding paths
- **BFS**: Shortest path in unweighted graph, level-order traversal
- **Union-Find**: Dynamic connectivity, Kruskal's MST
- **Dijkstra**: Shortest path with non-negative weights
- **Bellman-Ford**: Shortest path with negative weights

### Time/Space Complexity
- **DFS/BFS**: O(V + E) time, O(V) space
- **Topological Sort**: O(V + E) time, O(V) space
- **Cycle Detection**: O(V + E) time, O(V) space
- **Connected Components**: O(V + E) time, O(V) space

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