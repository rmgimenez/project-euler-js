/*
Number Letter Counts

Contar as letras utilizadas para escrever os número de 1 a 1000 no idioma inglês
*/

const limite = 1000;

// retorna o número por escrito no idioma inglês
function escreveNumeroEmIngles(numero) {
  if (numero == 1000) {
    return 'one thousand';
  } else if (Math.floor(numero / 100) == 1) {
    return 'one hundred';
  } else if (numero >= 20 && numero < 100) {
    let tens = Math.floor(numero / 10);
    let units = numero % 10;
    let tensWord = '';
    let unitsWord = '';

    if (tens == 2) {
      tensWord = 'twenty';
    } else if (tens == 3) {
      tensWord = 'thirty';
    } else if (tens == 4) {
      tensWord = 'forty';
    } else if (tens == 5) {
      tensWord = 'fifty';
    } else if (tens == 6) {
      tensWord = 'sixty';
    } else if (tens == 7) {
      tensWord = 'seventy';
    } else if (tens == 8) {
      tensWord = 'eighty';
    } else if (tens == 9) {
      tensWord = 'ninety';
    }

    if (units == 1) {
      unitsWord = 'one';
    } else if (units == 2) {
      unitsWord = 'two';
    } else if (units == 3) {
      unitsWord = 'three';
    } else if (units == 4) {
      unitsWord = 'four';
    } else if (units == 5) {
      unitsWord = 'five';
    } else if (units == 6) {
      unitsWord = 'six';
    } else if (units == 7) {
      unitsWord = 'seven';
    } else if (units == 8) {
      unitsWord = 'eight';
    } else if (units == 9) {
      unitsWord = 'nine';
    }

    return tensWord + ' ' + unitsWord;
  } else if (numero >= 10 && numero < 20) {
    let units = numero % 10;
    let unitsWord = '';

    if (units == 0) {
      unitsWord = 'ten';
    } else if (units == 1) {
      unitsWord = 'eleven';
    } else if (units == 2) {
      unitsWord = 'twelve';
    } else if (units == 3) {
      unitsWord = 'thirteen';
    } else if (units == 4) {
      unitsWord = 'fourteen';
    } else if (units == 5) {
      unitsWord = 'fifteen';
    } else if (units == 6) {
      unitsWord = 'sixteen';
    } else if (units == 7) {
      unitsWord = 'seventeen';
    } else if (units == 8) {
      unitsWord = 'eighteen';
    } else if (units == 9) {
      unitsWord = 'nineteen';
    }

    return unitsWord;
  } else {
    let units = numero % 10;
    let tens = Math.floor((numero % 100) / 10);
    let hundreds = Math.floor(numero / 100);
    let unitsWord = '';
    let tensWord = '';
    let hundredsWord = '';

    if (units == 1) {
      unitsWord = 'one';
    } else if (units == 2) {
      unitsWord = 'two';
    } else if (units == 3) {
      unitsWord = 'three';
    } else if (units == 4) {
      unitsWord = 'four';
    } else if (units == 5) {
      unitsWord = 'five';
    } else if (units == 6) {
      unitsWord = 'six';
    } else if (units == 7) {
      unitsWord = 'seven';
    } else if (units == 8) {
      unitsWord = 'eight';
    } else if (units == 9) {
      unitsWord = 'nine';
    }

    if (tens == 2) {
      tensWord = 'twenty';
    } else if (tens == 3) {
      tensWord = 'thirty';
    } else if (tens == 4) {
      tensWord = 'forty';
    } else if (tens == 5) {
      tensWord = 'fifty';
    } else if (tens == 6) {
      tensWord = 'sixty';
    } else if (tens == 7) {
      tensWord = 'seventy';
    } else if (tens == 8) {
      tensWord = 'eighty';
    } else if (tens == 9) {
      tensWord = 'ninety';
    }

    if (hundreds == 1) {
      hundredsWord = 'one hundred';
    } else if (hundreds == 2) {
      hundredsWord = 'two hundred';
    } else if (hundreds == 3) {
      hundredsWord = 'three hundred';
    } else if (hundreds == 4) {
      hundredsWord = 'four hundred';
    } else if (hundreds == 5) {
      hundredsWord = 'five hundred';
    } else if (hundreds == 6) {
      hundredsWord = 'six hundred';
    } else if (hundreds == 7) {
      hundredsWord = 'seven hundred';
    } else if (hundreds == 8) {
      hundredsWord = 'eight hundred';
    } else if (hundreds == 9) {
      hundredsWord = 'nine hundred';
    }

    if (tens == 0 && units == 0) {
      return hundredsWord;
    } else if (tens == 0) {
      return hundredsWord + ' and ' + unitsWord;
    } else if (units == 0) {
      return hundredsWord + ' and ' + tensWord;
    } else {
      return hundredsWord + ' and ' + tensWord + ' ' + unitsWord;
    }
  }
}

// retorna o número de letras utilizadas para escrever os números de 1 a 1000
function contarLetras() {
  let total = 0;
  for (let i = 1; i <= limite; i++) {
    let numero = escreveNumeroEmIngles(i);
    let numeroSemEspacos = numero.replace(/ /g, '');
    total += numeroSemEspacos.length;
  }
  return total;
}

console.log(contarLetras());