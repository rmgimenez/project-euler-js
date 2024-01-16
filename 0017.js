/*
Contar as letras utilizadas para escrever os número de 1 a 1000 no idioma inglês
*/

const limite = 1000;

let result = 0;

for (let i = 1; i <= limite; i++) {
  if (i == 1 || i == 2 || i == 6) {
    result += 3;
  } else if (i == 3 || i == 7 || i == 8) {
    result += 5;
  } else if (i == 4 || i == 5 || i == 9) {
    result += 4;
  }
}
