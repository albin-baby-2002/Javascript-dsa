// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

let len = 18;
let len2 = Math.round(len / 2);

for (let i = 0; i < len; i++) {
  let str = '';

  for (let j = 0; j < len; j++) {
    if (i < len2) {
      if (j < len2 - i || j >= len2 + i) {
        str += '*';
      } else {
        str += ' ';
      }
    } else {
      if (j <= i - len2 || j >= (len-1) - (i - len2 )) {
        str += '*';
      } else {
        str += ' ';
      }
    }
  }
  console.log(str);
}
