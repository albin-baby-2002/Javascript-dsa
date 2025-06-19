//      *
//     ***
//    *****
//   *******
//  *********
//  *********
//   *******
//    *****
//     ***
//      *

const length = 5;

const len = length * 2 ;

for (let i = 0; i < len; i++) {
  let str = '';



  for (let j = 0; j < len ; j++) {
    if (i < length) {
      if (j >= length - i && j <= length + i) {
        str += '*';
      } else {
        str += ' ';
      }
    } else {

      if( j > i-length && j < len - (i-length) ){
        str+='*'
      }else{
        str+=' '
      }

    }
  }
  console.log(str);
}
