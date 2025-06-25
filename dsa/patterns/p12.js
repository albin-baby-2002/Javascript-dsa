
// A
// B B
// C C C
// D D D D
// E E E E E

// a-z  - 97 - 122
// A-Z  - 65 - 90
// 0-9  - 48 - 57

let len = 5;

let count = 'A'.charCodeAt(0);

for (let i = 0; i < len; i++) {
  let str = '';

  for (let j = 0; j <= i; j++) {
    str += String.fromCharCode(count) + ' ';
  }
  count++;
  console.log(str);
}
