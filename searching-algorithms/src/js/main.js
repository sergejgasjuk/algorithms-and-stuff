

import linearSearch_recursive from "./algorithms/linearSearch";
import binarySearch from "./algorithms/binarySearch";

let arr = [6, 16, 9, 1, 10, 25, 98, 24, 11, 2, 84, 20, 5];
arr = arr.sort((a, b) => a - b);
console.log(arr);
let itemToFind = 5;
console.log("i: ", binarySearch(arr, itemToFind));

