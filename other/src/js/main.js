import {timingDecorator as bench} from "helpers";
import * as GCD from "./stuff/greatest-common-divisor";
import * as fibo from "./stuff/fibonacci";

let fiboNum = 41; // 165580141  

let fibRecursive = bench(fibo.fibo_recursive),
    fibIterative = bench(fibo.fibo_iterative),
    fibBadRecursive = bench(fibo.fibo_badRecursion);

let fibRecursiveResult = fibRecursive(fiboNum),
    fibIterativeResult = fibIterative(fiboNum),
    fibBadRecursiveResult = fibBadRecursive(fiboNum);

console.log(`fibo recursive: ${fibRecursiveResult.result} \n`,
  `fibo recursive: ${fibRecursiveResult.endTime}`);

console.log(`fibo iterative: ${fibIterativeResult.result} \n`,
  `fibo recursive: ${fibIterativeResult.endTime}`);

console.log(`fibo bad recursion: ${fibBadRecursiveResult.result} \n`,
  `fibo bad recursion: ${fibBadRecursiveResult.endTime}`);

