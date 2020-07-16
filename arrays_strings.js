// 1.1 basic
function isUnique(str) {
  return str.length === new Set(str).size;
}

// 1.1 ASCII string
function isUnique(str) {
  let charSet = new Array(128);

  for (let char of str) {
    if (charSet[char]) return false;
    charSet[char] = true;
  }
  return true;
}

// 1.1 via sorting
function isUnique(str) {
  let sortedArr = str.split('').sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) return false;
  }
  return true;
}

// 1.2 