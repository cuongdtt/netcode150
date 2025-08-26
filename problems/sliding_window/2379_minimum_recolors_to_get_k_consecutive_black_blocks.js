/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
// Input: blocks = "WBWBBBW", k = 2

var minimumRecolors = function (blocks, k) {
  let min = Number.MAX_SAFE_INTEGER;
  let count = 0;

  for (let i = 0; i < k && i < blocks.length; i++) {
    if (blocks[i] === "W") count++;
  }

  min = Math.min(count, min);

  for (let i = k; i < blocks.length; i++) {
    if (blocks[i - k] === "W") count--;
    if (blocks[i] === "W") count++;
    min = Math.min(count, min);
  }

  return min;
};

module.exports = { minimumRecolors };
