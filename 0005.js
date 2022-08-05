/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let encontrou = false;

for (let i = 1; encontrou == false; i++) {
  let divisivel = false;
  for (let j = 1; j <= 20; j++) {
    if (i % j == 0) {
      divisivel = true;
    } else {
      divisivel = false;
    }

    if (divisivel == false) {
      break;
    }
  }

  if (divisivel) {
    encontrou = true;
    console.log(i);
  }
}
