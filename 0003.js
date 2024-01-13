/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

import { isPrimeRMG } from './0000.js';

let maior = 0;
const numeroVerificar = 600851475143;

for (let i = 3; i < numeroVerificar ** (1 / 2); i = i + 2) {
  if (numeroVerificar % i == 0) {
    if (isPrimeRMG(i)) {
      maior = i;
    }
  }
}

console.log(maior);
