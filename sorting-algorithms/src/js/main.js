import {generateRandomArray as arrGenerator} from "helpers";
import {timingDecorator as bench} from "helpers";
import bubbleSort from "./algorithms/bubbleSort";
import injectionSort from "./algorithms/injectionSort";
import mergeSort from "./algorithms/mergeSort";
import quickSort from "./algorithms/quickSort";
import selectionSort from "./algorithms/selectionSort";

let bubble = bench(bubbleSort),
    injection = bench(injectionSort),
    merge = bench(mergeSort),
    quick = bench(quickSort),
    selection = bench(selectionSort),
    arrToSort = arrGenerator(25);

let bubbleSortResult = bubble(arrToSort);
let injectionSortResult = injection(arrToSort);
let mergeSortResult = merge(arrToSort);
let quickSortResult = quick(arrToSort);
let selectionSortResult = selection(arrToSort);

console.log(`Array To Sort: ${arrToSort}`);

// Bubble
console.log(`Bubble Sort Result: ${bubbleSortResult.result} \n`,
            `Bubble Sort Time: ${bubbleSortResult.endTime}`);
// Injection
console.log(`Injection Sort Result: ${injectionSortResult.result} \n`,
  `Injection Sort Time: ${injectionSortResult.endTime}`);

// Merge
console.log(`Merge Sort Result: ${mergeSortResult.result} \n`,
  `Merge Sort Time: ${mergeSortResult.endTime}`);

// Quick
console.log(`Quick Sort Result: ${quickSortResult.result} \n`,
  `Quick Sort Time: ${quickSortResult.endTime}`);

// Selection
console.log(`Selection Sort Result: ${selectionSortResult.result} \n`,
  `Selection Sort Time: ${selectionSortResult.endTime}`);

