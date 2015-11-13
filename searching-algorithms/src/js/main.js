import {generateRandomArray as arrGenerator} from "helpers";
import {timingDecorator as bench} from "helpers";
import * as linear from "./algorithms/linearSearch";
import * as binary from "./algorithms/binarySearch";

let arrToSearchIn = arrGenerator(5000, 10000).sort((a, b) => a - b);
let itemToFind = arrToSearchIn[Math.floor(Math.random() * arrToSearchIn.length)];

let linearIterative = bench(linear.linearSearch),
    linearRecursive = bench(linear.linearSearch_recursive),
    binaryIterative = bench(binary.binarySearch),
    binaryRecursive = bench(binary.binarySearch_recursive);

let linearIterativeResult = linearIterative(arrToSearchIn, itemToFind),
    linearRecursiveResult = linearRecursive(arrToSearchIn, itemToFind),
    binaryIterativeResult = binaryIterative(arrToSearchIn, itemToFind),
    binaryRecursiveResult = binaryRecursive(arrToSearchIn, itemToFind);

let es6FindIndex = (arr, target) => arr.findIndex(x => x === target);
es6FindIndex = bench(es6FindIndex);
let es6FindIndexResult = es6FindIndex(arrToSearchIn, itemToFind);

console.log(`Input Array Length: ${arrToSearchIn.length}`);
console.log(`Item to find: ${itemToFind}`);

// es6 Find Index just to test if result is correct
console.log(`es6 Find Index Result: ${es6FindIndexResult.result} \n`,
  `es6 Find Index Time: ${es6FindIndexResult.endTime}`);

// Linear Iterative
console.log(`Linear Iterative Result: ${linearIterativeResult.result} \n`,
  `Linear Iterative Time: ${linearIterativeResult.endTime}`);

// Linear Recursive
console.log(`Linear Recursive Result: ${linearRecursiveResult.result} \n`,
  `Linear Recursive Time: ${linearRecursiveResult.endTime}`);

// Binary Iterative
console.log(`Binary Iterative Result: ${binaryIterativeResult.result} \n`,
  `Binary Iterative Time: ${binaryIterativeResult.endTime}`);

// Binary Recursive
console.log(`Binary Recursive Result: ${binaryRecursiveResult.result} \n`,
  `Binary Recursive Time: ${binaryRecursiveResult.endTime}`);


