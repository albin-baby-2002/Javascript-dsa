// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

let len = 10;
let len2 = len * 2 - 1;

for (let i = 0; i < len2; i++) {
  let str = '';

  for (let j = 0; j <= len2; j++) {
    if (i < len) {
      if (j <= i || j >= len2 - i) {
        str += '*';
      } else {
        str += ' ';
      }
    } else {
      if (j < len - 1 - (i - len) || j > (len) + (i-len)) {
        str += '*';
      } else {
        str += ' ';
      }
    }
  }
  console.log(str);
}
