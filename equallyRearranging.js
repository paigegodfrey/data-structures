// O(n^2) time
// O(n) space
// where n is the length of the string
function equallyRearranging(str) {
  if (!str.length) return "";

  let output = "";
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    frequency[char] = frequency[char] ? ++frequency[char] : 1;
  }

  while (str.length > 0) {
    if (frequency.W && frequency.W > 0) {
      output += 'W';
      --frequency.W;
      str = str.substring(0, str.indexOf('W')) + str.substring(str.indexOf('W') + 1, str.length);
    }
    if (frequency.D && frequency.D > 0) {
      output += 'D';
      --frequency.D;
      str = str.substring(0, str.indexOf('D')) + str.substring(str.indexOf('D') + 1, str.length);
    }
    if (frequency.L && frequency.L > 0) {
      output += 'L';
      --frequency.L;
      str = str.substring(0, str.indexOf('L')) + str.substring(str.indexOf('L') + 1, str.length);
    }
  }

  return output;
}