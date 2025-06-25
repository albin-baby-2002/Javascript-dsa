// A B C D E
// A B C D
// A B C
// A B
// A

// a-z  - 97 - 122
// A-Z  - 65 - 90
// 0-9  - 48 - 57

let len = 5;

for (let i = 0; i < len; i++) {
  let str = '';
  let count = 'A'.charCodeAt(0);

  for (let j = 0; j < len - i; j++) {
    str += String.fromCharCode(count) + ' ';
    count++;
  }
  console.log(str);
}
