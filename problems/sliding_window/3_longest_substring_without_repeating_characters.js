/**
 * @param {string} s
 * @return {number}
 */

// creative solution!
// var lengthOfLongestSubstring = function (s) {
//   let seen = new Set();
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (seen.has(s[i])) {
//       for (let e of seen) {
//         seen.delete(e);
//         if (e === s[i]) break;
//       }
//     }
//     seen.add(s[i]);
//     max = Math.max(max, seen.size);
//   }
//   return max;
// };

// Key Differences:
// | Approach | Data Structure | Deletion Strategy | Complexity |
// |----------|----------------|-------------------|------------|
// | Creative | Set | Iterate and delete up to repeat | O(n²) worst case |
// | Map-based | Map | Jump left pointer directly | O(n) |
// | Set with pointers | Set + pointers | Remove from left until valid | O(n) |

// Common sliding window solution using two pointers
// var lengthOfLongestSubstring = function (s) {
//   let left = 0;
//   let maxLength = 0;
//   let charMap = new Map(); // character -> position

//   for (let right = 0; right < s.length; right++) {
//     // If character exists, move left pointer to position after first occurrence
//     if (charMap.has(s[right])) {
//       left = Math.max(left, charMap.get(s[right]) + 1);
//     }
//     charMap.set(s[right], right);
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// };

// Alternative: Using Set with left pointer
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLength = 0;
  let charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    // Remove characters from left until no repeating character
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

module.exports = { lengthOfLongestSubstring };
