/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let count = 0;
  let curA = 0;
  for (let i = 0; i < k && i < arr.length; i++) {
    curA = curA + arr[i];
  }
  if (curA >= threshold * k) {
    count++;
  }

  for (let i = k; i < arr.length; i++) {
    curA = curA + arr[i] - arr[i - k];

    if (curA >= threshold * k) {
      count++;
    }
  }

  return count;
};

module.exports = { numOfSubarrays };
