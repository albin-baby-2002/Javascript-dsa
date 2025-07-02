const nums = [1, 2, 8, 9, 12, 56, 34, 23, 11, 23, 45, 8];

// for optimization if in one inner loop no swapping happen then the array is already sorted

for (let i = nums.length - 1; i >= 0; i--) {
  let swapped = false;
  for (let j = 1; j <= i; j++) {
    if (nums[j - 1] > nums[j]) {
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
      swapped = true;
    }
  }
  if(!swapped) break;
}

console.log(nums);
