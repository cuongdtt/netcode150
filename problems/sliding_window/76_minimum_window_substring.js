/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";

  let freqMap = {};
  for (let i = 0; i < t.length; i++) {
    freqMap[t[i]] = (freqMap[t[i]] || 0) + 1;
  }
  let required = Object.keys(freqMap).length;

  let minL = 0,
    minR = 0;
  let l = 0,
    r = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let window = {};
  let match = 0;

  while (r < s.length) {
    let char = s[r];

    if (freqMap[char]) {
      window[char] = 1 + (window[char] || 0);
      if (window[char] === freqMap[char]) match++;
    }

    while (match === required) {
      let current = r - l + 1;
      if (current < min) {
        minL = l;
        minR = r;
        min = current;
      }
      char = s[l];

      if (freqMap[char]) {
        window[char]--;
        if (window[char] < freqMap[char]) match--;
      }
      l++;
    }

    r++;
  }

  return min === Number.MAX_SAFE_INTEGER ? "" : s.slice(minL, minR + 1);
};

module.exports = { minWindow };
