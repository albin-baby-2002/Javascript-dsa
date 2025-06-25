// 1      1
// 12    21
// 123  321
// 12344321

const len = 4;
const len2 = len * 2;

for (let i = 0; i < len; i++) {
  let str = '';

  for (let j = 0; j < len2; j++) {
    if (j <= i) {
      str += j + 1;
    } else if (j >= len2 - i - 1) {
      const val = len2 - j;
      str += val;
    } else {
      str += ' ';
    }
  }
  console.log(str);
}
