
/**
 * Sorts input array using merge algorithm. Returns sorted array.
 * @param arr {Array}
 * @return {Array}
 */

// TODO: not working properly. requires fix
export default function mergeSort(arr) {
  let newArr = arr.slice(),  // create copy of input array
      result;

  if (newArr.length < 2) return newArr;

  var mid = Math.floor(newArr.length / 2),
    left = newArr.slice(0, mid),
    right = newArr.slice(mid);

  return merge(left, right);

  //console.time('MergeSort time');  // start timer
  //result = mergeSortFunc(newArr);
  //console.timeEnd('MergeSort time');  // end timer
  //console.log('MergeSort output: ' + result);  // show result
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

  result = result.concat(leftPart).concat(rightPart);

  return result;
}