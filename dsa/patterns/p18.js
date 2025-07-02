// *****
// *   *
// *   *
// *   *
// *****

const len = 5;

for (let i = 0; i < len; i++) {
  let str = '';

  for (let j = 0; j < len; j++) {
    if (i === 0 || j === 0 || i === len - 1 || j === len - 1) {
      str += '*';
    } else str += ' ';
  }
  console.log(str)
}
