/**
 * @param {number[]} nums
 * @return {number}
 */

// Helper functions
// gcd: greatest common divisor
// How it work:
// 1. if b is 0, return a
// 2. otherwise, return gcd(b, a % b)
// example: gcd(12, 18) = 6
// 12 = 1 * 12 + 0 * 18
// 18 = 1 * 12 + 1 * 6
// 12 = 2 * 6 + 0 * 18

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// lcm: least common multiple
// How it work:
// 1. return (a * b) / gcd(a, b)
// example: lcm(12, 18) = 36
// 12 = 1 * 12 + 0 * 18
// 18 = 1 * 12 + 1 * 6
// 12 = 2 * 6 + 0 * 18
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

var maxSubarrayLength = function (nums) {};

module.exports = { maxSubarrayLength };
