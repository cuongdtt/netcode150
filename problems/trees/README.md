# Trees Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all tree problems.

## Trees Best Practices

### Core Structure
```javascript
// Definition for binary tree node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
```

### Tree Traversal Patterns
```javascript
// Inorder (Left, Root, Right) - gives sorted order for BST
function inorderTraversal(root) {
    const result = [];
    
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }
    
    inorder(root);
    return result;
}

// Preorder (Root, Left, Right) - good for copying tree
function preorderTraversal(root) {
    const result = [];
    
    function preorder(node) {
        if (!node) return;
        result.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }
    
    preorder(root);
    return result;
}

// Postorder (Left, Right, Root) - good for deletion
function postorderTraversal(root) {
    const result = [];
    
    function postorder(node) {
        if (!node) return;
        postorder(node.left);
        postorder(node.right);
        result.push(node.val);
    }
    
    postorder(root);
    return result;
}

// Level order (BFS)
function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}
```

### Common Patterns
1. **Recursive DFS**: Most tree problems can be solved recursively
2. **Iterative DFS**: Using stack when recursion depth is concern
3. **BFS Level Order**: Using queue for level-by-level processing
4. **Two Pointers**: For comparing trees or finding paths
5. **Parent Tracking**: When need to go back up the tree

### Problem Categories
1. **Tree Construction**: Build tree from traversals
2. **Tree Validation**: Check if tree satisfies certain properties
3. **Path Problems**: Find paths with specific sum/properties
4. **Tree Modification**: Insert, delete, modify nodes
5. **Tree Comparison**: Compare two trees for equality/similarity
6. **Binary Search Tree**: Leverage BST properties for efficient operations

### BST Specific Operations
```javascript
// BST Search
function searchBST(root, val) {
    if (!root || root.val === val) return root;
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
}

// BST Insert
function insertIntoBST(root, val) {
    if (!root) return new TreeNode(val);
    
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    
    return root;
}
```

### Time/Space Complexity
- **Traversal**: O(n) time, O(h) space where h is height
- **BST Operations**: O(log n) average, O(n) worst case for unbalanced tree
- **Level Order**: O(n) time, O(w) space where w is maximum width
- **Height Calculation**: O(n) time, O(h) space

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