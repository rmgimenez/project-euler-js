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
  original = valor;
  valor = valor + '';
  valor = valor.split('');

  let contrario = '';

  for (let i = valor.length - 1; i >= 0; i--) {
    contrario += valor[i];
  }

  return original == contrario;
};

module.exports = {
  /*
  Calcula a sequência de fibonacci
  */
  fibonacci,

  isPrime,

  isPrimeRMG,

  isPalindrome,
};
