// Pandigital Products
/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to 9 exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 x 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/
import { isPandigital } from './0000.js';

const productsSet = new Set();

for (let i = 1; i < 10000; i++) {
  for (let j = i + 1; j < 10000; j++) {
    const produto = i * j;
    const numero = `${i}${j}${produto}`;

    // para o for se o tamanho do número for maior que 9
    if (numero.length > 9) {
      break;
    }

    // passa para o próximo loop se o tamanho do número for menor que 9
    if (numero.length < 9) {
      continue;
    }

    if (isPandigital(numero)) {
      productsSet.add(+produto);
    }
  }
}

console.log(
  'Resposta',
  Array.from(productsSet).reduce((sum, product) => sum + product, 0)
);
