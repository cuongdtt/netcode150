/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */

// My solution
var minimumSumSubarray = function (nums, l, r) {
  let minSum = Number.MAX_SAFE_INTEGER;

  for (let len = l; len <= r; len++) {
    let currentSum = 0;
    let currentLength = 0;
    let leftIndex = 0;

    for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i];
      currentLength++;
      if (currentLength === len) {
        minSum = currentSum > 0 ? Math.min(minSum, currentSum) : minSum;
        currentSum -= nums[leftIndex];
        currentLength--;
        leftIndex++;
      }
    }
  }

  return minSum === Number.MAX_SAFE_INTEGER ? -1 : minSum;
};

// Solution 1: Brute Force - Check all possible subarrays
var minimumSumSubarrayBruteForce = function (nums, l, r) {
  let minSum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;

    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      let length = j - i + 1;

      if (length >= l && length <= r && currentSum > 0) {
        minSum = Math.min(minSum, currentSum);
      }

      // Optimization: Stop when length exceeds r
      // No need to continue since longer subarrays won't be valid
      if (length > r) {
        break;
      }
    }
  }

  return minSum === Number.MAX_SAFE_INTEGER ? -1 : minSum;
};

// Solution 1b: Alternative optimized brute force
var minimumSumSubarrayOptimizedBruteForce = function (nums, l, r) {
  let minSum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;

    // Only iterate until we reach maximum allowed length r
    for (let j = i; j < nums.length && j - i + 1 <= r; j++) {
      currentSum += nums[j];
      let length = j - i + 1;

      if (length >= l && currentSum > 0) {
        minSum = Math.min(minSum, currentSum);
      }
    }
  }

  return minSum === Number.MAX_SAFE_INTEGER ? -1 : minSum;
};

// Solution 2: Optimized Sliding Window approach
var minimumSumSubarrayOptimized = function (nums, l, r) {
  let minSum = Number.MAX_SAFE_INTEGER;

  for (let len = l; len <= r; len++) {
    let windowSum = 0;

    for (let i = 0; i < len && i < nums.length; i++) {
      windowSum += nums[i];
    }

    if (windowSum > 0) {
      minSum = Math.min(minSum, windowSum);
    }

    for (let i = len; i < nums.length; i++) {
      windowSum = windowSum - nums[i - len] + nums[i];

      if (windowSum > 0) {
        minSum = Math.min(minSum, windowSum);
      }
    }
  }

  return minSum === Number.MAX_SAFE_INTEGER ? -1 : minSum;
};

module.exports = {
  minimumSumSubarray,
  minimumSumSubarrayOptimizedBruteForce,
  minimumSumSubarrayOptimized,
};
