// D E
// C D E
// B C D E
// A B C D E

// a-z  - 97 - 122
// A-Z  - 65 - 90
// 0-9  - 48 - 57

let len = 5;

for (let i = 0; i < len; i++) {
  let str = '';
  let count = 'A'.charCodeAt(0) + len - 1 - i;

  for (let j = 0; j <= i; j++) {
    str += String.fromCharCode(count) + ' ';
    count++;
  }
  console.log(str);
}
