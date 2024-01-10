let diagonais = [];

function retornaNumerosDasDiagonais(tamanhoLado) {
  if (tamanhoLado == 1) {
    diagonais.push(1);
    return;
  }
  let primeiraDiagonal = tamanhoLado ** 2;

  diagonais.push(primeiraDiagonal);
  diagonais.push(primeiraDiagonal - tamanhoLado + 1);
  diagonais.push(primeiraDiagonal - tamanhoLado * 2 + 2);
  diagonais.push(primeiraDiagonal - tamanhoLado * 3 + 3);
}

for (let i = 1; i <= 1001; i = i + 2) {
  retornaNumerosDasDiagonais(i);
}

console.log(diagonais.reduce((partialSum, a) => partialSum + a, 0));
