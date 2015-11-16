export function fibo_iterative(n) {
  if (n < 0) {
    return false;
  }
  
  if (n === 0) {
    return 0;
  }
  
  if (n === 1) {
    return 1;
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

