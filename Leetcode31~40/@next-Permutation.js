var nextPermutation = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const large = nextLarge(i);
      swap(i, large);
      reverse(i + 1);
      return;
    }
  }

  nums.reverse();

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  function reverse(idx) {
    let start = idx;
    let end = nums.length - 1;
    console.log(idx);
    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  }
  function nextLarge(idx) {
    for (let i = nums.length - 1; i > idx; i--) {
      if (nums[i] > nums[idx]) return i;
    }
  }
};

console.log(nextPermutation([4, 3, 2, 1]));