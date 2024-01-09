// verifica se um número pode ser escrito como a soma dos dígitos elevado a uma potência
function numeroSomaDigitosPotencia(numero, potencia) {
  const digitos = ('' + numero).split('');

  let soma = 0;

  digitos.forEach((num) => {
    soma += num ** potencia;
  });

  if (soma == numero) {
    return true;
  } else {
    return false;
  }
}

const listaNumeros = [];

for (let i = 2; i < 999999; i++) {
  if (numeroSomaDigitosPotencia(i, 5)) {
    listaNumeros.push(i);
  }
}

// soma os números encontrados
let somaListaNumeros = 0;
listaNumeros.forEach((num) => {
  somaListaNumeros += num;
});

console.log('Lista de números', listaNumeros);
console.log('Resposta', somaListaNumeros);
