const nums = [1, 2, 8, 9, 12, 56, 34, 23, 11, 23, 45, 8];

for (let i = nums.length - 1; i >= 0; i--) {
  let largest = 0;
  let l = 1;

  while (l < i) {
    if (nums[l] > nums[largest]) {
      largest = l;
    }
    l++;
  }

  if (nums[largest] > nums[i]) {
    [nums[largest], nums[i]] = [nums[i], nums[largest]];
  }
}

console.log(nums);
