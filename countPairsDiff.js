function countPairsDiff(nums, diff) {
  if (nums.length < 2) return 0;

  let count = 0;
  let frequency = {};

  for (let num of nums) {
    frequency[num] = frequency[num] ? ++frequency[num] : 1;

    let numPlusDiff = num + diff;
    let numMinusDiff = num - diff;

    if (frequency[numPlusDiff]) count += frequency[numPlusDiff];
    if (frequency[numMinusDiff]) count += frequency[numMinusDiff];
  }
  
  return count;
}
