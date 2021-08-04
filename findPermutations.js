// O(n * n!) time (it takes n work to concatenate each string permutation)
// O(n) space
const permutation = (str, prefix = "") => {
  if (str.length == 0) {
    console.log(prefix);
  }
  else {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let rem = str.substring(0, i) + str.substring(i + 1);
      console.log(rem, prefix + char);
      permutation(rem, prefix + char);
    }
  }
}

let str = "abcd";
permutation(str);