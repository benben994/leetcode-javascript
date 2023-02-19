/*
  Insertion Sort
  Worst-case time complexity: O(n^2)
  Average-case time complexity: Theta(n^2)
  Best-case time complexity: Omega(n)
  Space complexity: O(1)
*/

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        // Swap
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      }
    }
  }

  return nums;
};

module.exports = insertionSort;
