/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const results = [intervals[0]];

  for (let i = 1; i < intervals.length; i += 1) {
    if (intervals[i][0] > results[results.length - 1][1]) {
      results.push(intervals[i]);
    } else {
      results[results.length - 1][1] = Math.max(
        results[results.length - 1][1],
        intervals[i][1]
      );
    }
  }

  return results;
};
// @lc code=end
