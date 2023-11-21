/*

Lexicographic Permutations

A permutation is an ordered arrangement of objects. For example, 3124 is one possible 
permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed 
numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

*/

function nthLexicographicPermutation(elements, n) {
  let result = [];
  n--; // Ajuste para indexação base 0

  while (elements.length > 0) {
    let index = Math.floor(n / factorial(elements.length - 1));
    n %= factorial(elements.length - 1);
    result.push(elements.splice(index, 1)[0]);
  }

  return result;
}

// Função para calcular o fatorial
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

let elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 1000000;
let result = nthLexicographicPermutation(elements.slice(), n); // Copia da lista para preservar a original

console.log(result.join(''));
