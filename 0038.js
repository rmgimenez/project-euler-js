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

for (let i = 2; i < 10000; i++) {
  const numeroGerado = '' + i * 1 + i * 2 + i * 3 + i * 4 + i * 5 + i * 6 + i * 7 + i * 8 + i * 9;

  if (verificaSeNumeroPandigital(numeroGerado)) {
    console.log(numeroGerado);
  }
}
