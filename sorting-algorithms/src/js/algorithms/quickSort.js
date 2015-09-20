
/**
 * Sorts input array using quick-sort algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */

export default function quickSort(arr) {
  let newArr = arr.slice();  // create copy of input array

  return (function quickSortInner(arr) {
    if (arr.length === 0) {
      return [];
    }

    let pivot = arr[0],
        left = [],
        right = [];

    for (var i = 1; i < arr.length; i += 1) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quickSortInner(left).concat(pivot, quickSortInner(right));

  })(newArr);
}
