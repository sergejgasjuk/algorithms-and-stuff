import {swapElements as swap} from "helpers";

/**
 * Sorts input array using selection algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */

export default function selectionSort(arr) {
  let newArr = arr.slice(),  // create copy of input array
      min;

  for (var i = 0; i < newArr.length - 1; i += 1) {
    min = i;
    for (var j = i + 1; j < newArr.length; j += 1) {
      if (newArr[j] < newArr[min]) {
        min = j;
      }
    }
    swap(newArr, i, min);
  }

  return newArr;
}
