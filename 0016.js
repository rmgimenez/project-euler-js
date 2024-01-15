// What is the sum of the digits of the number 2**1000
function sumOfDigits(n) {
  return n
    .toString()
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b));
}

console.log(sumOfDigits(BigInt(2) ** BigInt(1000)));
