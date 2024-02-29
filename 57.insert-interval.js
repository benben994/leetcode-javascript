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

var insert_v1 = function (intervals, newInterval) {
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

var insert = function (intervals, newInterval) {
  if (!intervals.length) return [newInterval];

  let results = [];
  let curInterval = newInterval;

  for (let i = 0; i < intervals.length; i++) {
    if (curInterval[1] < intervals[i][0]) {
      results.push(curInterval, ...intervals.slice(i));
      return results;
    }

    if (curInterval[0] > intervals[i][1]) {
      results.push(intervals[i]);
    } else {
      curInterval = [
        Math.min(curInterval[0], intervals[i][0]),
        Math.max(curInterval[1], intervals[i][1]),
      ];
    }
  }

  results.push(curInterval);

  return results;
};
// @lc code=end
