module.exports = {
  /*
  Calcula a sequência de fibonacci
  */
  fibonacci: function fibonacci(num) {
    if (num < 2) {
      return num;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  },

  isPrimeRMG: function isPrimeRMG(num) {
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
  },

  isPalindrome: function (valor) {
    valor = valor + '';
    valor = valor.split('');

    let contrario = '';

    for (let i = valor.length - 1; i >= 0; i--) {
      contrario += valor[i];
    }

    console.log(contrario);
  },
};
