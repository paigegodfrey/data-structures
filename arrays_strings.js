// 1.1 using a set
// O(n) time
// O(n) space
function isUnique(str) {
  return str.length === new Set(str).size;
}

// 1.1 via hash
// O(n) time
// O(n) space
function isUnique(str) {
  let hash = {};
  for (let char of str) {
    if (hash[char]) return false;
    hash[char] = 1;
  }
  return true;
}

// 1.1 ASCII string
// O(n) time
// O(1) space
function isUnique(str) {
  let charSet = new Array(128);
  for (let char of str) {
    if (charSet[char]) return false;
    charSet[char] = true;
  }
  return true;
}

// 1.1 via sorting
// O(n log n) time
// O(n) space
function isUnique(str) {
  let sortedArr = str.split('').sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) return false;
  }
  return true;
}

// 1.2 via hash
// O(n) time
// O(n) space
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  let str1Counts = {};
  let str2Counts = {};

  for (let char of str1) {
    str1Counts[char] = str1Counts[char] ? str1Counts[char]++ : 1;
  }

  for (let char of str2) {
    str2Counts[char] = str2Counts[char] ? str2Counts[char]++ : 1;
  }

  for (let char of str1) {
    if (str1Counts[char] !== str2Counts[char]) return false;
  }

  return true;
}

// 1.2 via sorting
// O(n log n) time
// O(n) space
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  let str1Sorted = [...str1].sort((a, b) => a - b).join('');
  let str2Sorted = [...str2].sort((a, b) => a - b).join('');

  for (let i = 0; i < str1Sorted.length; i++) {
    if (str1Sorted[i] !== str2Sorted[i]) return false;
  }

  return true;
}

// 1.3 extra spaces on either end
// O(n) time
// O(n) space
function URLIfy(str, trueLength) {
  let arr = [];
  let start;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      start = i;
      break;
    }
  }

  for (let i = start; i < trueLength + start; i++) {
    if (str[i] === ' ') arr.push('%20');
    else arr.push(str[i]);
  }

  return arr.join('');
}

