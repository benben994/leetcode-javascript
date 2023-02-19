/*
  Bubble Sort
  Worst-case time complexity: O(n^2)
  Average-case time complexity: Theta(n^2)
  Best-case time complexity: Omega(n)
  Space complexity: O(1)
*/

const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let swapped = false;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j + 1] < nums[j]) {
        // Swap
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  return nums;
};

module.exports = bubbleSort;
