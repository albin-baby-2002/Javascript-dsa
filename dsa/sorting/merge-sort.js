const nums = [1, 2, 8, 9, 12, 56, 34, 23, 11, 23, 45, 8];


function mergeSort(nums) {
  if (nums.length <= 1) return nums;

  let start = 0;
  let end = nums.length - 1;
  let mid = Math.ceil((start + end) / 2);

  let left = mergeSort(nums.slice(start, mid));
  let right = mergeSort(nums.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const lTotal = left.length;
  const rTotal = right.length;

  const newArray = new Array(lTotal + rTotal).fill(0);

  let lIndex = 0;
  let rIndex = 0;

  let aIndex = 0;

  while (lIndex < lTotal && rIndex < rTotal && aIndex < newArray.length) {
    if (left[lIndex] < right[rIndex]) {
      newArray[aIndex] = left[lIndex];
      lIndex++;
      aIndex++;
    } else {
      newArray[aIndex] = right[rIndex];
      rIndex++;
      aIndex++;
    }
  }

  while (lIndex < lTotal) {
    newArray[aIndex] = left[lIndex];
    lIndex++;
    aIndex++;
  }

  while (rIndex < rTotal) {
    newArray[aIndex] = right[rIndex];
    rIndex++;
    aIndex++;
  }

  return newArray;
}
