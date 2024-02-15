/*
Number Letter Counts

Contar as letras utilizadas para escrever os número de 1 a 1000 no idioma inglês
*/

const limite = 1000;

let result = 0;

for (let i = 1; i <= limite; i++) {
  if (i == 1 || i == 2 || i == 6) {
    result += 3;
  } else if (i == 3 || i == 7 || i == 8) {
    result += 5;
  } else if (i == 4 || i == 5 || i == 9) {
    result += 4;
  }
}

function escreveNumeroEmIngles(numero) {
  if (numero == 1000) {
    return 'one thousand';
  } else if (Math.floor(numero / 100) == 1) {
    return 'one hundred';
  }
}

// retorna o número por escrito no idioma inglês
function numeroPorEscrito(numero) {
  let numeroPorEscrito = '';
  if (numero == 1) {
    numeroPorEscrito = 'one';
  } else if (numero == 2) {
    numeroPorEscrito = 'two';
  } else if (numero == 3) {
    numeroPorEscrito = 'three';
  } else if (numero == 4) {
    numeroPorEscrito = 'four';
  } else if (numero == 5) {
    numeroPorEscrito = 'five';
  } else if (numero == 6) {
    numeroPorEscrito = 'six';
  } else if (numero == 7) {
    numeroPorEscrito = 'seven';
  } else if (numero == 8) {
    numeroPorEscrito = 'eight';
  } else if (numero == 9) {
    numeroPorEscrito = 'nine';
  }

  return numeroPorEscrito;
}

// conta quantas letras em uma plavra não levando em consideração os espaçoes e os hifens
function contaLetras(palavra) {
  let contador = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] != ' ' && palavra[i] != '-') {
      contador++;
    }
  }
  return contador;
}

console.log(contaLetras(numeroPorEscrito(5)));
