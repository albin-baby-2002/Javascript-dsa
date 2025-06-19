//      *
//     ***
//    *****
//   *******
//  *********

const length = 5;

for (let i = 0; i < length; i++) {
  let str = '';

  for (let j = 0; j < length * 2; j++) {
    if (j >= length - i && j <= length + i) {
      str += '*';
    } else {
      str += ' ';
    }
  }
  console.log(str);
}