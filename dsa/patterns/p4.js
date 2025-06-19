//  * * * * *
//   * * * *
//    * * *
//     * *
//      *

const length = 5;

for (let i = 0; i < length; i++) {
  let str = '';

  for (let k = 0; k < i + 1; k++) {
    str += ' ';
  }

  for (let j = 0; j < length - i; j++) {
    str += '* ';
  }
  console.log(str);
}
