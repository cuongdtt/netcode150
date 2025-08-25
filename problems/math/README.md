# Math Problems - Algorithm Implementation Notes

This document tracks algorithm approaches, implementation notes, and complexity analysis for all math and geometry problems.

## Math Best Practices

### Number Theory Fundamentals

#### Greatest Common Divisor (GCD)
```javascript
// Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Recursive version
function gcdRecursive(a, b) {
    return b === 0 ? a : gcdRecursive(b, a % b);
}

// Least Common Multiple
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
```

#### Prime Numbers
```javascript
// Check if number is prime
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

// Sieve of Eratosthenes
function sieveOfEratosthenes(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) primes.push(i);
    }
    return primes;
}

// Prime factorization
function primeFactors(n) {
    const factors = [];
    
    // Handle 2 separately
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }
    
    // Check odd factors
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    
    // If n is still > 2, it's a prime factor
    if (n > 2) factors.push(n);
    
    return factors;
}
```

#### Modular Arithmetic
```javascript
// Modular exponentiation
function modPow(base, exp, mod) {
    let result = 1;
    base = base % mod;
    
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = Math.floor(exp / 2);
        base = (base * base) % mod;
    }
    
    return result;
}

// Modular inverse (when mod is prime)
function modInverse(a, mod) {
    return modPow(a, mod - 2, mod);
}

// Extended Euclidean Algorithm
function extendedGCD(a, b) {
    if (b === 0) {
        return { gcd: a, x: 1, y: 0 };
    }
    
    const result = extendedGCD(b, a % b);
    const x = result.y;
    const y = result.x - Math.floor(a / b) * result.y;
    
    return { gcd: result.gcd, x, y };
}
```

### Combinatorics

#### Factorial and Combinations
```javascript
// Factorial with memoization
const factorialMemo = {};
function factorial(n) {
    if (n <= 1) return 1;
    if (factorialMemo[n]) return factorialMemo[n];
    
    factorialMemo[n] = n * factorial(n - 1);
    return factorialMemo[n];
}

// Combination C(n, k)
function combination(n, k) {
    if (k > n || k < 0) return 0;
    if (k === 0 || k === n) return 1;
    
    // Use C(n, k) = C(n, n-k) to minimize calculations
    k = Math.min(k, n - k);
    
    let result = 1;
    for (let i = 0; i < k; i++) {
        result = result * (n - i) / (i + 1);
    }
    
    return Math.round(result);
}

// Pascal's triangle for combinations
function pascalTriangle(numRows) {
    const triangle = [];
    
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangle[i-1][j-1] + triangle[i-1][j]);
            }
        }
        triangle.push(row);
    }
    
    return triangle;
}
```

### Geometry

#### Basic Geometry
```javascript
// Distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Check if three points are collinear
function areCollinear(x1, y1, x2, y2, x3, y3) {
    // Using cross product
    return (y2 - y1) * (x3 - x2) === (y3 - y2) * (x2 - x1);
}

// Area of triangle using coordinates
function triangleArea(x1, y1, x2, y2, x3, y3) {
    return Math.abs((x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2)) / 2);
}

// Check if point is inside triangle
function pointInTriangle(px, py, x1, y1, x2, y2, x3, y3) {
    const totalArea = triangleArea(x1, y1, x2, y2, x3, y3);
    const area1 = triangleArea(px, py, x2, y2, x3, y3);
    const area2 = triangleArea(x1, y1, px, py, x3, y3);
    const area3 = triangleArea(x1, y1, x2, y2, px, py);
    
    return Math.abs(totalArea - (area1 + area2 + area3)) < 1e-9;
}
```

#### Line and Circle Operations
```javascript
// Line equation: ax + by + c = 0
class Line {
    constructor(x1, y1, x2, y2) {
        this.a = y2 - y1;
        this.b = x1 - x2;
        this.c = x2 * y1 - x1 * y2;
    }
    
    // Distance from point to line
    distanceToPoint(x, y) {
        return Math.abs(this.a * x + this.b * y + this.c) / 
               Math.sqrt(this.a * this.a + this.b * this.b);
    }
    
    // Check if two lines are parallel
    isParallel(other) {
        return Math.abs(this.a * other.b - this.b * other.a) < 1e-9;
    }
    
    // Find intersection point
    intersection(other) {
        const denom = this.a * other.b - this.b * other.a;
        if (Math.abs(denom) < 1e-9) return null; // Parallel lines
        
        const x = (this.b * other.c - this.c * other.b) / denom;
        const y = (this.c * other.a - this.a * other.c) / denom;
        return { x, y };
    }
}

// Circle operations
class Circle {
    constructor(centerX, centerY, radius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }
    
    // Check if point is inside circle
    containsPoint(x, y) {
        const dist = distance(x, y, this.centerX, this.centerY);
        return dist <= this.radius;
    }
    
    // Check if two circles intersect
    intersects(other) {
        const dist = distance(this.centerX, this.centerY, 
                             other.centerX, other.centerY);
        return dist <= this.radius + other.radius;
    }
}
```

### Probability and Statistics

#### Basic Statistics
```javascript
function mean(arr) {
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
}

function median(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    
    return sorted.length % 2 === 0 
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
}

function mode(arr) {
    const freq = {};
    let maxFreq = 0;
    let modes = [];
    
    for (const val of arr) {
        freq[val] = (freq[val] || 0) + 1;
        if (freq[val] > maxFreq) {
            maxFreq = freq[val];
            modes = [val];
        } else if (freq[val] === maxFreq) {
            modes.push(val);
        }
    }
    
    return modes;
}

function variance(arr) {
    const avg = mean(arr);
    const squaredDiffs = arr.map(val => (val - avg) ** 2);
    return mean(squaredDiffs);
}

function standardDeviation(arr) {
    return Math.sqrt(variance(arr));
}
```

### Problem Categories
1. **Number Theory**: GCD, LCM, primes, factorization
2. **Modular Arithmetic**: Fast exponentiation, modular inverse
3. **Combinatorics**: Permutations, combinations, counting
4. **Geometry**: Points, lines, circles, polygons
5. **Probability**: Random variables, distributions
6. **Linear Algebra**: Matrices, vectors, transformations

### Common Techniques
1. **Mathematical Induction**: Prove formulas and properties
2. **Modular Arithmetic**: Handle large numbers
3. **Coordinate Geometry**: Use coordinates for geometric problems
4. **Algebraic Manipulation**: Transform equations
5. **Approximation**: Handle floating-point precision

### Precision Considerations
- Use integer arithmetic when possible
- Be careful with floating-point comparisons
- Consider using libraries for big integers
- Use appropriate epsilon for floating-point equality

### Time/Space Complexity
- **GCD**: O(log min(a,b))
- **Prime checking**: O(√n)
- **Sieve**: O(n log log n)
- **Modular exponentiation**: O(log exp)
- **Factorization**: O(√n)

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