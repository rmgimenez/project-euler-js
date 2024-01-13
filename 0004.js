/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
import { isPalindrome } from './0000.js';

let maiorProduto = 0;
let multiplicacao = 0;

for (let i = 999; i >= 100; i--) {
  for (let j = 999; j >= 100; j--) {
    multiplicacao = i * j;
    if (isPalindrome(multiplicacao)) {
      if (multiplicacao > maiorProduto) {
        maiorProduto = multiplicacao;
      }
    }
  }
}

console.log(maiorProduto);
