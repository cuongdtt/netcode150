# Tries Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all trie (prefix tree) problems.

## Tries Best Practices

### Core Structure
```javascript
// Trie node definition
class TrieNode {
    constructor() {
        this.children = {}; // or new Map() for better performance
        this.isEndOfWord = false;
    }
}

// Basic Trie implementation
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let current = this.root;
        
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        
        current.isEndOfWord = true;
    }
    
    search(word) {
        let current = this.root;
        
        for (const char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        
        return current.isEndOfWord;
    }
    
    startsWith(prefix) {
        let current = this.root;
        
        for (const char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        
        return true;
    }
}
```

### Advanced Trie Operations
```javascript
// Delete word from trie
delete(word) {
    const deleteHelper = (node, word, index) => {
        if (index === word.length) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;
            // Return true if node has no children (can be deleted)
            return Object.keys(node.children).length === 0;
        }
        
        const char = word[index];
        const childNode = node.children[char];
        
        if (!childNode) return false;
        
        const shouldDeleteChild = deleteHelper(childNode, word, index + 1);
        
        if (shouldDeleteChild) {
            delete node.children[char];
            // Return true if current node can be deleted
            return !node.isEndOfWord && Object.keys(node.children).length === 0;
        }
        
        return false;
    };
    
    deleteHelper(this.root, word, 0);
}

// Find all words with given prefix
findWordsWithPrefix(prefix) {
    const result = [];
    let current = this.root;
    
    // Navigate to prefix node
    for (const char of prefix) {
        if (!current.children[char]) {
            return result; // Prefix doesn't exist
        }
        current = current.children[char];
    }
    
    // DFS to find all words
    const dfs = (node, currentWord) => {
        if (node.isEndOfWord) {
            result.push(currentWord);
        }
        
        for (const [char, childNode] of Object.entries(node.children)) {
            dfs(childNode, currentWord + char);
        }
    };
    
    dfs(current, prefix);
    return result;
}
```

### Common Use Cases
1. **Autocomplete**: Find all words with given prefix
2. **Spell Checker**: Check if word exists, suggest corrections
3. **Word Games**: Boggle, Scrabble word validation
4. **IP Routing**: Longest prefix matching
5. **String Search**: Pattern matching with wildcards

### Trie Variations
1. **Standard Trie**: Basic prefix tree for strings
2. **Compressed Trie (Radix Tree)**: Merge nodes with single child
3. **Suffix Trie**: Built from all suffixes of a string
4. **Ternary Search Trie**: Each node has three children (less memory)

### When to Use Tries
- Multiple string searches with common prefixes
- Autocomplete functionality
- Dictionary operations (insert, search, delete)
- Pattern matching with prefixes
- When prefix-based queries are frequent

### Time/Space Complexity
- **Insert**: O(m) time where m is word length
- **Search**: O(m) time where m is word length
- **Space**: O(ALPHABET_SIZE × N × M) worst case, where N is number of words, M is average length
- **Prefix Search**: O(p + n) where p is prefix length, n is number of results

### Memory Optimization Tips
- Use arrays instead of objects for children when alphabet is small
- Implement compressed tries for sparse data
- Use bit manipulation for binary tries
- Consider ternary search tries for memory-constrained environments

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