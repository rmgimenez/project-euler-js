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

export { isPrime, divisoresDeUmNumero, decomporNumero };
