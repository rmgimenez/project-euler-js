/*
Problema 35 do site Project Euler

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2,3,5,7,11,13,17,31,37,71,73,79, and 97.

How many circular primes are there below one million?
*/

const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

const isCircularPrime = (n) => {
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    const rotated = str.slice(i) + str.slice(0, i);
    if (!isPrime(+rotated)) return false;
  }
  return true;
};

const circularPrimes = (limit) => {
  let count = 0;
  for (let i = 2; i < limit; i++) {
    if (isCircularPrime(i)) count++;
  }
  return count;
};

console.log(circularPrimes(1000000)); // 55
