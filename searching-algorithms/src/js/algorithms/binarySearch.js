/**
 * Iterative version of binary search algorithm
 * @param {Array} arr - input array
 * @param {Number} target - item which should be found
 * @returns {Number} index of item in array or -1 if not found
 */
export function binarySearch(arr, target) {
  let min = 0,
      max = arr.length - 1;
  
  while (min <= max) {
    let mid = Math.floor(min + ((max - min) / 2));
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }  
  }
  
  return -1;
}

/**
 * Recursive version of binary search algorithm
 * @param {Array} arr - input array
 * @param {Number} target - item which should be found
 * @returns {Number} index of item in array or -1 if not found
 */
export function binarySearch_recursive(arr, target) {
  return (function search(min, max){
    let mid = Math.floor(min + ((max - min) / 2));
    
    if (min > max) {
      return -1;
    }
    
    if (arr[min] === target) {
      return min;
    }
    
    if (arr[max] === target) {
      return max;
    }
    
    if (arr[mid] === target) {
      return mid;
    }
    
    if (arr[mid] > target) {
      return search(min + 1, mid - 1);
    } else if (arr[mid] < target) {
      return search(mid + 1, max - 1);
    }
    
  })(0, arr.length - 1);
}
