/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let res = 0;
  let sum = 0;
  let hashmap = { 0: 1 };

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];

    if (hashmap[sum - k]) {
      res += hashmap[sum - k];
    }

    hashmap[sum] = (hashmap[sum] || 0) + 1;
  }

  return res;
};
// @lc code=end
