const nums = [1, 2, 8, 9, 12, 56, 34, 23, 11, 23, 45, 8];

for (let i = 1; i < nums.length; i++) {
  for (let j = i; j > 0; j--) {
    if (nums[j] < nums[j - 1]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
    } else break;
  }
}

console.log(nums);
