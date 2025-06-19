// *********
//  *******
//   *****
//    ***
//     *

const length = 5;

for (let i = 0; i < length; i++) {
  let str = '';
  const len = length*2-1;


  for (let j = 0; j < len; j++) {
    if (j >= i && j < len - i) {
      str += '*';
    } else {
      str += ' ';
    }
  }
  console.log(str);
}
