import {swapElements as swap} from "helpers";

/**
 * Sorts input array using bubble algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */
export default function bubbleSort(arr) {
  let newArr = arr.slice();  // create copy of input array

  for (let i = newArr.length - 1; i >= 0; i -= 1) {
    for (let j = newArr.length - 1; j >= 0; j -= 1) {
      if (newArr[j] < newArr[j - 1]) {
        swap(newArr, j, j - 1);
      }
    }
  }

  return newArr;
}

