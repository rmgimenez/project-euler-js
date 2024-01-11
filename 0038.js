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

for (let i = 100000000; i < 1000000000; i++) {
  if (verificaSeNumeroPandigital(i)) {
    console.log(i);
  }
}
