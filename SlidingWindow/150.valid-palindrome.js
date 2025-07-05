function removeNonAlphanumeric(str) {
  return str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let sx = removeNonAlphanumeric(s);
  if (sx.length === 0) return true;
  if (sx.length === 1) return true;
  for (let i = 0; i < sx.length; i++) {
    if (sx[i] !== sx[sx.length - i - 1]) return false;
  }
  return true;
};

module.exports = { isPalindrome };
