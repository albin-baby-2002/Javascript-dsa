// 1
// 01
// 101
// 0101
// 10101

const length = 5;

for (let i = 0; i < length; i++) {
  let str = '';
  let item;

  if (i % 2 === 0) {
    item = 1;
  }else {
    item = 0
  }

  for (let j = 0; j <= i; j++) {
    str += item;
    if (item === 1) {
      item = 0
    } else {
      item = 1
    }
  }
  console.log(str);
}
