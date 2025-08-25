/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isPermutation1(array_a, array_b) {
  if (array_a.length !== array_b.length) return false;
  return [...array_a].sort().join("") === [...array_b].sort().join("");
}

function isPermutation(array_a, array_b) {
  const map = new Map();
  for (let i = 0; i < array_a.length; i++) {
    map.set(array_a[i], (map.get(array_a[i]) || 0) + 1);
  }
  for (let i = 0; i < array_b.length; i++) {
    map.set(array_b[i], (map.get(array_b[i]) || 0) - 1);
  }
  for (let value of map.values()) {
    if (value !== 0) return false;
  }
  return true;
}

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  const size = s1.length;
  const window = [];

  for (let i = 0; i < size; i++) {
    window.push(s2[i]);
  }
  if (isPermutation(window, s1.split(""))) return true;

  for (let i = size; i < s2.length; i++) {
    window.push(s2[i]);
    window.shift();
    if (isPermutation(window, s1.split(""))) return true;
  }

  return false;
};

var checkInclusionOptimalFrequency = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Count = {};
  const windowCount = {};

  for (let char of s1) {
    s1Count[char] = (s1Count[char] || 0) + 1;
  }

  let left = 0;
  let matches = 0;
  const requiredMatches = Object.keys(s1Count).length;

  for (let right = 0; right < s2.length; right++) {
    const rightChar = s2[right];
    windowCount[rightChar] = (windowCount[rightChar] || 0) + 1;

    if (s1Count[rightChar] && windowCount[rightChar] === s1Count[rightChar]) {
      matches++;
    }

    if (right - left + 1 > s1.length) {
      const leftChar = s2[left];
      if (s1Count[leftChar] && windowCount[leftChar] === s1Count[leftChar]) {
        matches--;
      }
      windowCount[leftChar]--;
      if (windowCount[leftChar] === 0) {
        delete windowCount[leftChar];
      }
      left++;
    }

    if (matches === requiredMatches) {
      return true;
    }
  }

  return false;
};

var checkInclusionArrayFrequency = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Freq = new Array(26).fill(0);
  const windowFreq = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Freq[s1.charCodeAt(i) - 97]++;
    windowFreq[s2.charCodeAt(i) - 97]++;
  }

  if (arraysEqual(s1Freq, windowFreq)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    windowFreq[s2.charCodeAt(i) - 97]++;
    windowFreq[s2.charCodeAt(i - s1.length) - 97]--;

    if (arraysEqual(s1Freq, windowFreq)) return true;
  }

  return false;
};

function arraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

var checkInclusionSingleArray = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const freq = new Array(26).fill(0);
  let required = s1.length;

  for (let char of s1) {
    freq[char.charCodeAt(0) - 97]++;
  }

  let left = 0;

  for (let right = 0; right < s2.length; right++) {
    const rightIndex = s2.charCodeAt(right) - 97;

    if (freq[rightIndex] > 0) {
      required--;
    }
    freq[rightIndex]--;

    if (right - left + 1 > s1.length) {
      const leftIndex = s2.charCodeAt(left) - 97;
      if (freq[leftIndex] >= 0) {
        required++;
      }
      freq[leftIndex]++;
      left++;
    }

    if (required === 0) return true;
  }

  return false;
};

module.exports = { checkInclusion };
