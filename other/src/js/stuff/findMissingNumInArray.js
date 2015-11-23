/**
 * Finds a missing number in array of simple numbers [0..9]
 * @param {Array} arr - Array that has a missing simple number
 * @return {Number}, Missing Number
 */
export default function findMissingNumInArray(arr) {
  let l = arr.length + 1;
  let checkSum = (l * (l + 1)) / 2;
  let actualSum = 0;

  for (let num of arr) {
    actualSum += num;
  }

  return checkSum - actualSum;
}
