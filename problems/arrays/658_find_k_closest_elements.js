/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// My solution
var findClosestElements1 = function (arr, k, x) {
  let minAbs = Number.MAX_SAFE_INTEGER;
  let curAbs = 0;
  let index = 0;

  for (let i = 0; i < k && i < arr.length; i++) {
    curAbs += Math.abs(arr[i] - x);
  }

  minAbs = Math.min(minAbs, curAbs);

  for (let i = k; i < arr.length; i++) {
    curAbs += Math.abs(arr[i] - x);
    curAbs -= Math.abs(arr[i - k] - x);
    if (curAbs < minAbs) {
      minAbs = curAbs;
      index = i - k + 1;
    }
  }

  return arr.slice(index, index + k);
};

// Binary search version
var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - k;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr.slice(left, left + k);
};

// Two pointers solution
var findClosestElements2 = function (arr, k, x) {
  // Step 1: Find insertion point using binary search
  function findInsertionPoint(arr, x) {
    let left = 0,
      right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < x) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  // Step 2: Set up two pointers around insertion point
  let insertPos = findInsertionPoint(arr, x);
  let left = insertPos - 1; // Points to largest element < x
  let right = insertPos; // Points to smallest element >= x

  // Step 3: Expand outward greedily
  while (right - left - 1 < k) {
    if (left < 0) {
      // Only right side available
      right++;
    } else if (right >= arr.length) {
      // Only left side available
      left--;
    } else {
      // Both sides available - choose closer one
      if (x - arr[left] <= arr[right] - x) {
        left--;
      } else {
        right++;
      }
    }
  }

  return arr.slice(left + 1, right);
};

module.exports = { findClosestElements };
