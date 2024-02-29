/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const results = [];

  const search = (i, arr, sum) => {
    if (sum === target) {
      results.push(arr);
      return;
    }
    if (i >= candidates.length || sum > target) {
      return;
    }

    search(i, [...arr, candidates[i]], sum + candidates[i]);
    search(i + 1, arr, sum);
  };

  search(0, [], 0);

  return results;
};
// @lc code=end
