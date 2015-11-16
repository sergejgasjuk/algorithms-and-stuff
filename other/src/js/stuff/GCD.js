/**
 * Euclid's Greatest Common Divisor Algorithm
 */

export function GCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  
  while (a !== b) {
    if (a > b) {
      a -= b
    } else {
      b -= a;
    }
  }
  
  return a;
}

export function GCD_recursive(a, b) {
  return b ? GCD_recursive(b, a % b) : Math.abs(a);
}
