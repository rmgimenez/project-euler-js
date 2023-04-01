/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

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

let soma = 0;

for (let i = 2; i <= 2000000; i++) {
  if (isPrime(i)) {
    soma += i;
  }
}

console.log(soma);
