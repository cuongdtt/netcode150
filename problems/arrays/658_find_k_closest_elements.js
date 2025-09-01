/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
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

module.exports = { findClosestElements };
