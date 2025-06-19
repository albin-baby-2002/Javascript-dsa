// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

const length = 5;

const len = length * 2 - 1;

for (let i = 0; i < len; i++) {
  let str = '';

  for (let j = 0; j < len; j++) {
    if (i < length) {
      if (j <= i) str += '*';
    } else {
      if (j < length - (i - length) - 1) {
        str += '*';
      }
    }
  }
  console.log(str);
}
