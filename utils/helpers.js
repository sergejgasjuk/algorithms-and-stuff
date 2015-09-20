
/**
 *  Generates Random Array
 * @param arrayLength {Number}
 * @returns {Array}
 */
export function generateRandomArray(arrayLength) {
  let randomArr = [];

  arrayLength = arrayLength || 25;

  for (let i = 0; i < arrayLength; i += 1) {
    randomArr.push(Math.floor(Math.random() * 100));
  }

  return randomArr;
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
 * @return result, endTime {Object}
 */
export function timingDecorator(func, timer) {
  return function() {
    let startTime = performance.now();
    let result = func.apply(this, arguments);
    let endTime = (performance.now() - startTime).toFixed(6);

    return {result, endTime};
  }
}
