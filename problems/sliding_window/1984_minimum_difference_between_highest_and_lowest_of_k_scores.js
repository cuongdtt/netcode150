/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) return 0;
  nums.sort((a, b) => a - b);

  let minDiff = Number.MAX_SAFE_INTEGER;

  minDiff = Math.min(minDiff, nums[k - 1] - nums[0]);
  if (minDiff === 0) return 0;

  for (let i = k; i < nums.length; i++) {
    minDiff = Math.min(minDiff, nums[i] - nums[i - k + 1]);
  }

  return minDiff;
};

// Not work
var minimumDifference2 = function (nums, k) {
  if (k === 1) return 0;
  // nums.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < k && i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }
  minDiff = Math.min(minDiff, max - min);

  if (minDiff === 0) return 0;

  // minDiff = Math.min(minDiff, nums[k - 1] - nums[0]);

  for (let i = k; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    max = Math.min(max, nums[i]);

    // when remove first item we don't know what will be max or min
    min = Math.min(min, nums[i - k]);
    max = Math.min(max, nums[i - k]);

    minDiff = Math.min(minDiff, max - min);
  }

  return minDiff;
};

module.exports = { minimumDifference };
