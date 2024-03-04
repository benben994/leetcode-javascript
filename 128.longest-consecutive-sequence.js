/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let hashmap = {};

  nums.forEach((num) => {
    hashmap[num] = true;
  });

  let max = 0;
  for (let key of Object.keys(hashmap)) {
    let cur = 1;
    let num = Number(key);

    if (!hashmap[num - 1]) {
      while (hashmap[num + 1]) {
        cur += 1;
        num += 1;
      }
    }

    max = Math.max(cur, max);
  }

  return max;
};
// @lc code=end
