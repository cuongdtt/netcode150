/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }

    seen.add(nums[i]);

    if (seen.size > k) {
      seen.delete(nums[i - k]);
    }
  }

  return false;
};

var containsNearbyDuplicateHashMap = function (nums, k) {
  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (indexMap.has(nums[i])) {
      const prevIndex = indexMap.get(nums[i]);
      if (i - prevIndex <= k) return true;
    }
    indexMap.set(nums[i], i);
  }

  return false;
};

var containsNearbyDuplicateBruteForce = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

module.exports = { containsNearbyDuplicate };
