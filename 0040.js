/*
An irrational decimal fraction is created by concatenating the positive integers:

0.12345678910<décimo segundo dígito>"1"112131415161718192021...

It can be seen that the 
th digit of the fractional part is
.

If 
 represents the 
th digit of the fractional part, find the value of the following expression.
*/

let sequencia = '';

for (let i = 0; i < 1000000; i++) {
  sequencia = sequencia + i.toString();
}

// resposta
console.log(
  sequencia[1] *
    sequencia[10] *
    sequencia[100] *
    sequencia[1000] *
    sequencia[10000] *
    sequencia[100000] *
    sequencia[1000000]
);
