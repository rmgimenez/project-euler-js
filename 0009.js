/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

// trinagulo 3, 4 e 5

limite = 1000;

function encontraHipotenusa(a, b) {
  return Math.sqrt(a * a + b * b);
}

for (let i = 3; i < limite - 3; i++) {
  for (let j = i + 1; j < limite - 2; j++) {
    let c = encontraHipotenusa(i, j);
    if (i + j + c == 1000) {
      console.log(i * j * c);
    }
  }
}
