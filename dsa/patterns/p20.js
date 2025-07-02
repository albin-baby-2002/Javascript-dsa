// 555555555
// 544444445
// 543333345
// 543222345
// 543212345
// 543222345
// 543333345
// 544444445
// 555555555

const len = 5;
const len2 = len * 2 - 1;

for (let i = 0; i < len2; i++) {
  let str = '';

  for (let j = 0; j < len2; j++) {
    if (i < len) {
      const rowVal = len - i;

      if (j < len) {
        const colVal = len - j;
        str += Math.max(rowVal, colVal);
      } else {
        const colVal = len - (len2 - j - 1);

        str += Math.max(rowVal, colVal);
      }
    } else {
      const rowVal = len * 2 - len2 + i - len +1;

      if (j < len) {
        const colVal = len - j;
        str += Math.max(rowVal, colVal);
      } else {
        const colVal = len - (len2 - j - 1);

        str += Math.max(rowVal, colVal);
      }
    }
  }

  console.log(str);
}
