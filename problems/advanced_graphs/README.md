# Advanced Graphs Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all advanced graph problems.

## Advanced Graphs Best Practices

### Advanced Graph Algorithms

#### Dijkstra's Algorithm (Shortest Path)
```javascript
function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const pq = new MinHeap(); // Priority queue
    
    // Initialize distances
    for (const node in graph) {
        distances[node] = node === start ? 0 : Infinity;
    }
    
    pq.insert([0, start]);
    
    while (pq.size() > 0) {
        const [dist, node] = pq.extractMin();
        
        if (visited.has(node)) continue;
        visited.add(node);
        
        for (const [neighbor, weight] of graph[node] || []) {
            const newDist = distances[node] + weight;
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.insert([newDist, neighbor]);
            }
        }
    }
    
    return distances;
}
```

#### Bellman-Ford Algorithm (Negative Weights)
```javascript
function bellmanFord(graph, start) {
    const distances = {};
    const edges = [];
    
    // Initialize distances and collect edges
    for (const node in graph) {
        distances[node] = node === start ? 0 : Infinity;
        for (const [neighbor, weight] of graph[node] || []) {
            edges.push([node, neighbor, weight]);
        }
    }
    
    const nodeCount = Object.keys(graph).length;
    
    // Relax edges V-1 times
    for (let i = 0; i < nodeCount - 1; i++) {
        for (const [u, v, weight] of edges) {
            if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
            }
        }
    }
    
    // Check for negative cycles
    for (const [u, v, weight] of edges) {
        if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
            throw new Error('Graph contains negative cycle');
        }
    }
    
    return distances;
}
```

#### Floyd-Warshall (All Pairs Shortest Path)
```javascript
function floydWarshall(graph) {
    const nodes = Object.keys(graph);
    const dist = {};
    
    // Initialize distance matrix
    for (const i of nodes) {
        dist[i] = {};
        for (const j of nodes) {
            if (i === j) {
                dist[i][j] = 0;
            } else {
                dist[i][j] = Infinity;
            }
        }
    }
    
    // Set direct edge weights
    for (const node in graph) {
        for (const [neighbor, weight] of graph[node] || []) {
            dist[node][neighbor] = weight;
        }
    }
    
    // Floyd-Warshall algorithm
    for (const k of nodes) {
        for (const i of nodes) {
            for (const j of nodes) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    return dist;
}
```

#### Minimum Spanning Tree (Kruskal's)
```javascript
class UnionFind {
    constructor(n) {
        this.parent = Array(n).fill().map((_, i) => i);
        this.rank = Array(n).fill(0);
    }
    
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    
    union(x, y) {
        const px = this.find(x);
        const py = this.find(y);
        
        if (px === py) return false;
        
        if (this.rank[px] < this.rank[py]) {
            this.parent[px] = py;
        } else if (this.rank[px] > this.rank[py]) {
            this.parent[py] = px;
        } else {
            this.parent[py] = px;
            this.rank[px]++;
        }
        
        return true;
    }
}

function kruskalMST(edges, n) {
    // Sort edges by weight
    edges.sort((a, b) => a[2] - b[2]);
    
    const uf = new UnionFind(n);
    const mst = [];
    let totalWeight = 0;
    
    for (const [u, v, weight] of edges) {
        if (uf.union(u, v)) {
            mst.push([u, v, weight]);
            totalWeight += weight;
            
            if (mst.length === n - 1) break;
        }
    }
    
    return { mst, totalWeight };
}
```

#### Maximum Flow (Ford-Fulkerson)
```javascript
function maxFlow(graph, source, sink) {
    // Create residual graph
    const residualGraph = {};
    for (const u in graph) {
        residualGraph[u] = {};
        for (const v in graph[u]) {
            residualGraph[u][v] = graph[u][v];
            if (!residualGraph[v]) residualGraph[v] = {};
            if (!residualGraph[v][u]) residualGraph[v][u] = 0;
        }
    }
    
    let maxFlowValue = 0;
    
    // BFS to find augmenting path
    function bfs() {
        const visited = new Set();
        const queue = [[source, Infinity, [source]]];
        visited.add(source);
        
        while (queue.length > 0) {
            const [node, flow, path] = queue.shift();
            
            if (node === sink) {
                return { flow, path };
            }
            
            for (const neighbor in residualGraph[node]) {
                const capacity = residualGraph[node][neighbor];
                if (!visited.has(neighbor) && capacity > 0) {
                    visited.add(neighbor);
                    const newFlow = Math.min(flow, capacity);
                    queue.push([neighbor, newFlow, [...path, neighbor]]);
                }
            }
        }
        
        return null;
    }
    
    // Find augmenting paths and update flow
    let pathData;
    while ((pathData = bfs()) !== null) {
        const { flow, path } = pathData;
        maxFlowValue += flow;
        
        // Update residual capacities
        for (let i = 0; i < path.length - 1; i++) {
            const u = path[i];
            const v = path[i + 1];
            residualGraph[u][v] -= flow;
            residualGraph[v][u] += flow;
        }
    }
    
    return maxFlowValue;
}
```

#### Strongly Connected Components (Tarjan's)
```javascript
function tarjanSCC(graph) {
    let time = 0;
    const disc = {};
    const low = {};
    const onStack = new Set();
    const stack = [];
    const sccs = [];
    
    function dfs(node) {
        disc[node] = low[node] = time++;
        stack.push(node);
        onStack.add(node);
        
        for (const neighbor of graph[node] || []) {
            if (disc[neighbor] === undefined) {
                dfs(neighbor);
                low[node] = Math.min(low[node], low[neighbor]);
            } else if (onStack.has(neighbor)) {
                low[node] = Math.min(low[node], disc[neighbor]);
            }
        }
        
        // If node is root of SCC
        if (low[node] === disc[node]) {
            const scc = [];
            let w;
            do {
                w = stack.pop();
                onStack.delete(w);
                scc.push(w);
            } while (w !== node);
            sccs.push(scc);
        }
    }
    
    for (const node in graph) {
        if (disc[node] === undefined) {
            dfs(node);
        }
    }
    
    return sccs;
}
```

### Advanced Problem Categories
1. **Shortest Path**: Dijkstra, Bellman-Ford, Floyd-Warshall
2. **Minimum Spanning Tree**: Kruskal, Prim
3. **Maximum Flow**: Ford-Fulkerson, Edmonds-Karp
4. **Strongly Connected Components**: Tarjan, Kosaraju
5. **Bipartite Matching**: Hungarian algorithm, Hopcroft-Karp
6. **Network Analysis**: Centrality, PageRank

### When to Use Advanced Algorithms
- **Dijkstra**: Single-source shortest path with non-negative weights
- **Bellman-Ford**: Shortest path with negative weights, cycle detection
- **Floyd-Warshall**: All-pairs shortest path, small graphs
- **Kruskal/Prim**: Minimum spanning tree problems
- **Max Flow**: Network flow, bipartite matching, min cut
- **Tarjan**: Finding strongly connected components

### Time/Space Complexity
- **Dijkstra**: O((V + E) log V) with priority queue
- **Bellman-Ford**: O(VE)
- **Floyd-Warshall**: O(V³)
- **Kruskal**: O(E log E)
- **Max Flow**: O(VE²) for Ford-Fulkerson
- **Tarjan SCC**: O(V + E)

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