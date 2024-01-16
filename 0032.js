// Pandigital Products
/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to 9 exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 x 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/
import { verificaSeNumeroPandigital } from './0000.js';

let arrayDeNumerosPandigitais = [];

for (let i = 123456789; i <= 987654321; i++) {
  if (verificaSeNumeroPandigital(i)) {
    arrayDeNumerosPandigitais.push(i);
  }
}

console.log(arrayDeNumerosPandigitais.length);
