
/**
 * Sorts input array using merge algorithm. Returns sorted array.
 * @param arr {Array}
 * @return {Array}
 */

export default function mergeSort(arr) {
  let newArr = arr.slice();  // create copy of input array

  return (function mergeSortInner(arr) {
    if (arr.length < 2) {
      return arr;
    }

    let mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    return merge(mergeSortInner(left), mergeSortInner(right));
  })(newArr);
}

/**
 * Merges Two Arrays
 * @param leftPart {Array}
 * @param rightPart {Array}
 * @returns {Array}
 */
function merge(leftPart, rightPart) {
  let result = [];

  while (leftPart.length && rightPart.length) {
    leftPart[0] < rightPart[0] ? result.push(leftPart.shift()) : result.push(rightPart.shift());
  }

  return result.concat(leftPart).concat(rightPart);
}