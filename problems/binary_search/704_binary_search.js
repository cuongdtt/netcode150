/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(array, start, end, target) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);

  if (array[mid] === target) return mid;
  if (array[mid] > target) return binarySearch(array, start, mid - 1, target);
  if (array[mid] < target) return binarySearch(array, mid + 1, end, target);
}

var search = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
};

module.exports = { search };
