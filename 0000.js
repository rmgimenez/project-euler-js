const isPrime = function (n) {
  if (n == 1) return false;
  else if (n < 4) return true; //2 and 3 are prime
  else if (n % 2 == 0) return false;
  else if (n < 9) return true; //we have already excluded 4,6 and 8.
  else if (n % 3 == 0) return false;
  else var r = Math.floor(Math.sqrt(n)); // n rounded to the greatest integer r so that r*r<=n
  var f = 5;
  while (f <= r) {
    if (n % f == 0) return false;
    if (n % (f + 2) == 0) return false;
    f = f + 6;
  }

  return true;
};

const fibonacci = function (num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

const isPrimeRMG = function (num) {
  if (num === 2) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  } else {
    let encontrouDivisor = false;
    for (let i = 2; i < num / 2; i++) {
      if (num % i === 0) {
        encontrouDivisor = true;
      }
    }
    return !encontrouDivisor;
  }
};

const isPalindrome = function (valor) {
  const original = valor;
  valor = valor + '';
  valor = valor.split('');

  let contrario = '';

  for (let i = valor.length - 1; i >= 0; i--) {
    contrario += valor[i];
  }

  return original == contrario;
};

function decomporNumero(numero) {
  let restoParaDecompor = numero;

  if (isPrime(numero)) {
    return [1, numero];
  }

  let divisores = [];
  let n = 2;
  while (restoParaDecompor > 1) {
    if (isPrime(n)) {
      while (restoParaDecompor % n == 0) {
        restoParaDecompor = restoParaDecompor / n;
        divisores.push(n);
      }
    }
    n++;
  }

  return divisores;
}

function divisoresDeUmNumero(numero) {
  let divisores = [];
  divisores.push(1);

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      divisores.push(i);
    }
  }

  divisores.push(numero);

  return divisores;
}

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function quantidadeDeVezesNumeroPossuiDigito(numero, digito) {
  let digitosDoNumero = ('' + numero).split('');

  let quantidadeDeVezes = 0;

  digitosDoNumero.forEach((n) => {
    if (n == digito) {
      quantidadeDeVezes++;
    }
  });

  return quantidadeDeVezes;
}

// função mais simples para verificar se um número é pandigital
export function isPandigital(numero) {
  const sortedIdentity = numero.toString().split('').sort().join('');
  return sortedIdentity === '123456789';
}

function verificaSeNumeroPandigital(numero) {
  const checaNumero0 = quantidadeDeVezesNumeroPossuiDigito(numero, 0);

  if (checaNumero0 > 0) {
    return false;
  }

  const checaNumero1 = quantidadeDeVezesNumeroPossuiDigito(numero, 1);
  const checaNumero2 = quantidadeDeVezesNumeroPossuiDigito(numero, 2);
  const checaNumero3 = quantidadeDeVezesNumeroPossuiDigito(numero, 3);
  const checaNumero4 = quantidadeDeVezesNumeroPossuiDigito(numero, 4);
  const checaNumero5 = quantidadeDeVezesNumeroPossuiDigito(numero, 5);
  const checaNumero6 = quantidadeDeVezesNumeroPossuiDigito(numero, 6);
  const checaNumero7 = quantidadeDeVezesNumeroPossuiDigito(numero, 7);
  const checaNumero8 = quantidadeDeVezesNumeroPossuiDigito(numero, 8);
  const checaNumero9 = quantidadeDeVezesNumeroPossuiDigito(numero, 9);

  if (
    checaNumero1 == 1 &&
    checaNumero2 == 1 &&
    checaNumero3 == 1 &&
    checaNumero4 == 1 &&
    checaNumero5 == 1 &&
    checaNumero6 == 1 &&
    checaNumero7 == 1 &&
    checaNumero8 == 1 &&
    checaNumero9 == 1
  ) {
    return true;
  } else {
    return false;
  }
}

export {
  /*
  Calcula a sequência de fibonacci
  */
  fibonacci,
  isPrime,
  isPrimeRMG,
  isPalindrome,
  divisoresDeUmNumero,
  decomporNumero,
  factorial,
  quantidadeDeVezesNumeroPossuiDigito,
  verificaSeNumeroPandigital,
};
