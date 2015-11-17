/**
 * Fibonacci algorithm
 * Returns the n'th number of fibonacci's sequence
 * @param {Number} n
 * @return {Number} n
 */

export function fibo_iterative(n) {
  if (n < 0) {
    return false;
  }
  
  if (n ===  0 || n === 1) {
    return n;
  }
  
  let n1 = 0;
  let n2 = 1;
  let temp;
  
  while (n > 0) {
    temp = n1;
    n1 = n2;
    n2 += temp;
    n -= 1;
  }
  
  return n1;
}

export function fibo_badRecursion(n) {
  if (n < 0) {
    return false;
  }

  if (n ===  0 || n === 1) {
    return n;
  }
  
  return fibo_badRecursion(n - 1) + fibo_badRecursion(n - 2);
}

export function fibo_recursive(n) {
  let cache = {0: 0, 1: 1};
  
  return (function fibo(n) {
    if (n < 0) {
      return false;
    }
    
    return cache.hasOwnProperty(n)
      ? cache[n]
      : cache[n] = fibo(n - 1) + fibo(n - 2);
  })(n);
}
