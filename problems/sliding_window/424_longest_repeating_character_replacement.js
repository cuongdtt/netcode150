/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if (s.length === 0) return 0;

  const charCount = {};
  let maxCount = 0;
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    charCount[s[right]] = (charCount[s[right]] || 0) + 1;
    maxCount = Math.max(maxCount, charCount[s[right]]);

    while (right - left + 1 - maxCount > k) {
      charCount[s[left]]--;
      left++;
      maxCount = Math.max(maxCount, charCount[s[left]]);
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

module.exports = { characterReplacement };
