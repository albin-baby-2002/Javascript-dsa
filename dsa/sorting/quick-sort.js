const nums = [1,3,23,14,6,12];

quickSort(nums, 0, nums.length - 1);
console.log(nums);

function quickSort(nums, start, end) {
  console.log(nums);

  if (end <= start) return;
  let pivot = end;
  let l = start;
  let r = end - 1;

  while (l < r) {
    while (nums[l] < nums[pivot] && l < r) l++;

    while (nums[r] > nums[pivot] && l < r) r--;

    if (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  }
  if (nums[pivot] > nums[l]) {
    l = pivot-1;
  } else {
    [nums[pivot], nums[l]] = [nums[l], nums[pivot]];
  }

  quickSort(nums, start, l);
  quickSort(nums, l + 1, end );
}
