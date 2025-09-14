/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    seen[nums[i]] = (seen[nums[i]] || 0) + 1;
  }

  let sorted = Object.keys(seen)
    .sort((a, b) => seen[b] - seen[a])
    .map((i) => Number(i));

  return sorted.slice(0, k);
};

module.exports = { topKFrequent };
