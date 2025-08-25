/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minSize = Number.MAX_SAFE_INTEGER;
  let currentSubArray = 0;
  let currentIndex = 0;
  let currentLength = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSubArray += nums[i];
    currentLength++;
    while (currentSubArray >= target) {
      minSize = Math.min(minSize, currentLength);
      currentSubArray -= nums[currentIndex];
      currentIndex++;
      currentLength--;
    }
  }
  return minSize === Number.MAX_SAFE_INTEGER ? 0 : minSize;
};

module.exports = { minSubArrayLen };
