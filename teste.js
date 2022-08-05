var valorSoma = 0;
var contador = 1;
var limite = 4;

while (contador <= limite) {
  console.log('contador % 2: ', contador, contador % 2);

  if (contador % 2 == 0) {
    valorSoma = valorSoma + contador;
  }

  contador = contador + 1;
}

console.log(valorSoma);
