/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxSub = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;
  let currentLength = 0;
  let leftIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    currentLength++;
    if (currentLength >= k) {
      maxSub = Math.max(maxSub, currentSum);
      currentSum -= nums[leftIndex];
      currentLength--;
      leftIndex++;
    }
  }

  return maxSub / k;
};

module.exports = { findMaxAverage };
