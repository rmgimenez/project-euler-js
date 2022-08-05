/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/
const funcoes = require('./0000');

let encontrou = false;
let contador = 2;
let primosEncontrados = 0;

while (encontrou == false) {
  if (funcoes.isPrime(contador)) {
    primosEncontrados++;
    if (primosEncontrados == 10001) {
      console.log(contador);
      encontrou = true;
    }
  }

  contador++;
}
