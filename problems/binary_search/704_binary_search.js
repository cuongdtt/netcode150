/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch1(array, start, end, target) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);

  if (array[mid] === target) return mid;
  if (array[mid] > target) return binarySearch(array, start, mid - 1, target);
  if (array[mid] < target) return binarySearch(array, mid + 1, end, target);
}

var search = function (nums, target) {
  // binarySearch(nums, 0, nums.length - 1, target);
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((r + l) / 2);
    if (nums[m] === target) return m;
    if (nums[m] > target) r = m - 1;
    if (nums[m] < target) l = m + 1;
  }
  return -1;
};

module.exports = { search };
