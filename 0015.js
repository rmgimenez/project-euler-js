// Lattice Paths

function latticePaths(n) {
  let paths = 1;
  for (let i = 0; i < n; i++) {
    paths *= 2 * n - i;
    paths /= i + 1;
  }
  return paths;
}

console.log(latticePaths(20));
