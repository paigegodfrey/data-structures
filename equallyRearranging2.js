// O(n^2) time
// O(1) space
// where n is the length of the string
function equallyRearranging(str) {
  let output = "";

  while (str.length > 0) {
    let w = str.indexOf('W');
    if (w !== -1) {
      output += 'W';
      str = str.substring(0, w) + str.substring(w + 1, str.length);
    }

    let d = str.indexOf('D');
    if (d !== -1) {
      output += 'D';
      str = str.substring(0, d) + str.substring(d + 1, str.length);
    }

    let l = str.indexOf('L');
    if (l !== -1) {
      output += 'L';
      str = str.substring(0, l) + str.substring(l + 1, str.length);
    }
  }

  return output;
}