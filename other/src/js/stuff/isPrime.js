export function isPrime(num) {
  if (num < 2) {
    return false;
  }
  
  let n = 2;
  
  while (n < num) {
    if (num % n === 0) {
      return false;
    }

    n+=1;
  }
  
  return true;
}
