let n = 5000000;

let count = 0;

// if n i negative

n = Math.abs(n);

while (n !== 0) {
  n = Math.floor(n / 10);
  count++;
}

console.log(count);
