/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let leftIntervals = [];
  let rightIntervals = [];
  let start = newInterval[0];
  let end = newInterval[1];

  for (let i = 0; i < intervals.length; i += 1) {
    if (newInterval[1] < intervals[i][0]) {
      // new interval is smaller without overlapping
      rightIntervals.push(intervals[i]);
    } else if (intervals[i][1] < newInterval[0]) {
      // current interval is smaller without overlapping
      leftIntervals.push(intervals[i]);
    } else {
      // overlapping
      start = Math.min(intervals[i][0], start);
      end = Math.max(intervals[i][1], end);
    }
  }

  return [...leftIntervals, [start, end], ...rightIntervals];
};
// @lc code=end
