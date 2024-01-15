/*
Longest Collatz Sequence
*/

let result = 0;

function collatz(n) {
  let count = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    count++;
  }
  return count;
}

let max = 0;

for (let i = 1; i < 1000000; i++) {
  let count = collatz(i);
  if (count > max) {
    max = count;
    result = i;
  }
}

console.log(result);
