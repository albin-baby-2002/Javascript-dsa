//     *
//    * *
//   * * *
//  * * * *
// * * * * *

const length = 5;

for (let i = 0; i < length; i++) {
  let str = '';

  for (let k = 0; k < length - i; k++) {
    str += ' ';
  }

  for (let j = 0; j < i + 1; j++) {
    str += '* ';
  }
  console.log(str);
}
