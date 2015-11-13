
/**
 *  Generates Random Array
 * @param arrayLength 
 * @param maxInt
 * @returns {Array}
 */
export function generateRandomArray(arrayLength = 25, maxInt = 100) {
  let uniqueSet = new Set();      
  
  while(uniqueSet.size !== arrayLength) {
    uniqueSet.add(Math.floor(Math.random() * maxInt));
  }
  
  return Array.from(uniqueSet);
}

/**
 * Swaps two elements in array.
 * @param inputArray {Array}
 * @param firstElementIndex {Number}
 * @param secondElementIndex {Number}
 * @return {Array}
 */
export function swapElements(inputArray, firstElementIndex, secondElementIndex) {
  let temp;
  firstElementIndex = parseInt(firstElementIndex, 10);
  secondElementIndex = parseInt(secondElementIndex, 10);

  temp = inputArray[firstElementIndex];
  inputArray[firstElementIndex] = inputArray[secondElementIndex];
  inputArray[secondElementIndex] = temp;

  return inputArray;
}

/**
 * Time benchmark decorator
 * @param func {Function}
 * @param timer {String}
 //* @return result, endTime {Object}
 */
export function timingDecorator(func, timer) {
  return function() {
    let startTime = performance.now();
    let result = func.apply(this, arguments);
    let endTime = (performance.now() - startTime).toFixed(6);

    return {result, endTime};
  }
}
