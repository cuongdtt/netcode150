/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let min = k; // Start with worst case instead of MAX_SAFE_INTEGER
  let count = 0;

  // Initialize first window
  for (let i = 0; i < k && i < blocks.length; i++) {
    if (blocks[i] === "W") count++;
  }

  min = Math.min(count, min);

  // Early termination - if we found a perfect window
  if (min === 0) return 0;

  // Slide the window
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i - k] === "W") count--;
    if (blocks[i] === "W") count++;
    min = Math.min(count, min);

    // Early termination
    if (min === 0) return 0;
  }

  return min;
};

module.exports = { minimumRecolors };
