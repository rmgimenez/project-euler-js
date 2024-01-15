/*
Project Euler problem 38
*/
import { verificaSeNumeroPandigital } from './0000.js';

function problema38() {
  let maxPandigital = 0;

  for (let n = 1; n < 10000; n++) {
    let concatenatedProduct = '';

    for (let i = 1; i <= 9; i++) {
      concatenatedProduct += (n * i).toString();

      // Se a string resultante for maior que 9 dígitos, pare o loop interno
      if (concatenatedProduct.length > 9) {
        break;
      }

      if (concatenatedProduct.length === 9 && verificaSeNumeroPandigital(concatenatedProduct)) {
        // Se a string for pandigital, atualize o máximo encontrado
        maxPandigital = Math.max(maxPandigital, parseInt(concatenatedProduct, 10));
      }
    }
  }

  console.log('Maior número pandigital:', maxPandigital);
}

// Chame a função para resolver o problema
problema38();
