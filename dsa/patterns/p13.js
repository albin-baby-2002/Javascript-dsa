//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

// a-z  - 97 - 122
// A-Z  - 65 - 90
// 0-9  - 48 - 57

let len = 5;
let len2 = len * 2 - 1;

for (let i = 0; i < len; i++) {
  let str = '';
  let count = 'A'.charCodeAt(0);

  for (let j = 0; j < len2; j++) {
    if (j >= len - i - 1 && j < len + i) {
      str += String.fromCharCode(count);
      if (j >= len - 1) {
        count--;
      } else {
        count++;
      }
    } else {
      str += ' ';
    }
  }
  console.log(str);
}
