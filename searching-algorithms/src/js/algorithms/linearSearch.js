
/**
 * Iterative version of linear search algorithm
 * @param {Array} arr - input array
 * @param {Number} target - item which should be found
 * @returns {Number} index of item in array or -1 if not found
 */
export function linearSearch(arr, target) {
  let found = -1;
  
  for (let i = 0, l = arr.length; i < l; i += 1) {
    if (arr[i] === target) {
      found = i;
      break;
    }
  }

  return found;
}

/**
 * Recursive version of linear search algorithm
 * @param {Array} arr - input array
 * @param {Number} target - item which should be found
 * @param {Number} index - index from which to start, by default is 0
 * @returns {Number} index of item in array or -1 if not found
 */
export function linearSearch_recursive(arr, target, index = 0) {
  if (index > arr.length - 1) {
    return -1;
  } 
  
  if (arr[index] === target) {
    return index;
  } else {
    return linearSearch_recursive(arr, target, index + 1)
  }  
}
