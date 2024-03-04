/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate_v1 = function (nums, k) {
  // in-place, with extra O(k) space
  k %= nums.length;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    nums[i + k] = nums[i];
  }
  for (let i = k - 1; i >= 0; i -= 1) {
    const num = nums.pop();
    if (num) {
      nums[i] = num;
    }
  }
};

const swapArray = (arr, start, end) => {
  for (let i = 0; i < Math.floor((end - start + 1) / 2); i += 1) {
    [arr[i + start], arr[end - i]] = [arr[end - i], arr[i + start]];
  }
};

var rotate = function (nums, k) {
  // in-place, with extra O(1) space
  k %= nums.length;

  swapArray(nums, 0, nums.length - 1);
  swapArray(nums, 0, k - 1);
  swapArray(nums, k, nums.length - 1);
};
// @lc code=end
