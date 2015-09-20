
/**
 * Sorts input array using injection algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */

export default function injectionSort(arr) {
  let newArr = arr.slice(), // create copy of input array
      sortedItem;

  for (var i = 0; i < newArr.length; i += 1) {
    sortedItem = newArr[i];
    for (var j = i - 1; j >= 0 && newArr[j] > sortedItem; j -= 1) {
      newArr[j + 1] = newArr[j];
    }
    newArr[j + 1] = sortedItem;
  }

  return newArr;
}