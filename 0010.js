/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

import { isPrime } from './funcoes.js';

let soma = 0;

for (let i = 2; i <= 2000000; i++) {
  if (isPrime(i)) {
    soma += i;
  }
}

console.log(soma);
