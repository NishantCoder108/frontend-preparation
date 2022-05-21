/*Given an array of n element , Find all prime numbers from array */

const array = [-5, -3, -2, -1, ...Array(20).keys()]; // Array(20).keys() generates numbers from 0 to 19.
function isPrime(num) {
  if (num % 2 === 0) {
    return false;
  }

  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(array);

/*A prime number is a natural number divisible by precisely two numbers, namely 1 and the number itself. In simple terms, a prime number can only be divided by 1 and itself. Except for the number 2, every prime number is an odd number. */