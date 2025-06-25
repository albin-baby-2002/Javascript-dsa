// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

const len = 5;

let count = 1;

for (let i = 0; i < len; i++) {
  let str = '';
  for (let j = 0; j <= i; j++) {
    str += count + ' ';
    count++;
  }
  console.log(str);
}
