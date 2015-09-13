(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = bubbleSort;

var _helpers = require("helpers");

/**
 * Sorts input array using bubble algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */

function bubbleSort(arr) {
  var newArr = arr.slice(); // create copy of input array

  //console.time('BubbleSort time');  // start timer

  for (var i = newArr.length - 1; i >= 0; i -= 1) {
    for (var j = newArr.length - 1; j >= 0; j -= 1) {
      if (newArr[j] < newArr[j - 1]) {
        (0, _helpers.swapElements)(newArr, j, j - 1);
      }
    }
  }

  //console.timeEnd('BubbleSort time');  // end timer
  //console.log('BubbleSort output: ' + newArr);  // show result
  return newArr;
}

module.exports = exports["default"];

},{"helpers":7}],2:[function(require,module,exports){

/**
 * Sorts input array using injection algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = injectionSort;

function injectionSort(arr) {
  var newArr = arr.slice(),
      // create copy of input array
  sortedItem = undefined;

  //console.time('InjectionSort time');  // start timer

  for (var i = 0; i < newArr.length; i += 1) {
    sortedItem = newArr[i];
    for (var j = i - 1; j >= 0 && newArr[j] > sortedItem; j -= 1) {
      newArr[j + 1] = newArr[j];
    }
    newArr[j + 1] = sortedItem;
  }

  //console.timeEnd('InjectionSort time');  // end timer
  //console.log('InjectionSort output: ' + newArr);  // show result
  return newArr;
}

module.exports = exports["default"];

},{}],3:[function(require,module,exports){

/**
 * Sorts input array using merge algorithm. Returns sorted array.
 * @param arr {Array}
 * @return {Array}
 */

// TODO: not working properly. requires fix
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mergeSort;

function mergeSort(arr) {
  var newArr = arr.slice(),
      // create copy of input array
  result = undefined;

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
  var result = [];

  while (leftPart.length && rightPart.length) {
    leftPart[0] < rightPart[0] ? result.push(leftPart.shift()) : result.push(rightPart.shift());
  }

  result = result.concat(leftPart).concat(rightPart);

  return result;
}
module.exports = exports["default"];

},{}],4:[function(require,module,exports){

/**
 * Sorts input array using quick-sort algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = quickSort;

function quickSort(arr) {
  var newArr = arr.slice(); // create copy of input array

  //console.time('QuickSort time');  // start timer

  function quickSortFunc(arr) {
    if (arr.length === 0) return [];

    var pivot = arr[0],
        left = [],
        right = [];

    for (var i = 1; i < arr.length; i += 1) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quickSortFunc(left).concat(pivot, quickSortFunc(right));
  }

  return quickSortFunc(newArr);
  //console.timeEnd('QuickSort time');  // end timer
  //console.log('QuickSort output: ' + result);  // show result js_courses-sorting-algorithms
}

module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = selectionSort;

var _helpers = require("helpers");

/**
 * Sorts input array using selection algorithm. Returns sorted array.
 * @param arr {Array}
 * @returns {Array}
 */

function selectionSort(arr) {
  var newArr = arr.slice(),
      // create copy of input array
  min = undefined;

  //console.time('SelectionSort time');  // start timer

  for (var i = 0; i < newArr.length - 1; i += 1) {
    min = i;
    for (var j = i + 1; j < newArr.length; j += 1) {
      if (newArr[j] < newArr[min]) {
        min = j;
      }
    }
    (0, _helpers.swapElements)(newArr, i, min);
  }

  //console.timeEnd('SelectionSort time');  // end timer
  //console.log('SelectionSort output: ' + newArr);  // show result
  return newArr;
}

module.exports = exports["default"];

},{"helpers":7}],6:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _algorithmsBubbleSort = require("./algorithms/bubbleSort");

var _algorithmsBubbleSort2 = _interopRequireDefault(_algorithmsBubbleSort);

var _algorithmsInjectionSort = require("./algorithms/injectionSort");

var _algorithmsInjectionSort2 = _interopRequireDefault(_algorithmsInjectionSort);

var _algorithmsMergeSort = require("./algorithms/mergeSort");

var _algorithmsMergeSort2 = _interopRequireDefault(_algorithmsMergeSort);

var _algorithmsQuickSort = require("./algorithms/quickSort");

var _algorithmsQuickSort2 = _interopRequireDefault(_algorithmsQuickSort);

var _algorithmsSelectionSort = require("./algorithms/selectionSort");

var _algorithmsSelectionSort2 = _interopRequireDefault(_algorithmsSelectionSort);

},{"./algorithms/bubbleSort":1,"./algorithms/injectionSort":2,"./algorithms/mergeSort":3,"./algorithms/quickSort":4,"./algorithms/selectionSort":5,"helpers":7}],7:[function(require,module,exports){

/**
 *  Generates Random Array
 * @param arrayLength {Number}
 * @returns {Array}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomArray = generateRandomArray;
exports.swapElements = swapElements;

function generateRandomArray(arrayLength) {
  var randomArr = [];

  arrayLength = arrayLength || 15;

  for (var i = 0; i < arrayLength; i += 1) {
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

function swapElements(inputArray, firstElementIndex, secondElementIndex) {
  var temp = undefined;
  firstElementIndex = parseInt(firstElementIndex, 10);
  secondElementIndex = parseInt(secondElementIndex, 10);

  temp = inputArray[firstElementIndex];
  inputArray[firstElementIndex] = inputArray[secondElementIndex];
  inputArray[secondElementIndex] = temp;

  return inputArray;
}

},{}]},{},[6]);
