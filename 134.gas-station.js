/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  if (
    gas.reduce((acc, cur) => acc + cur, 0) <
    cost.reduce((acc, cur) => acc + cur, 0)
  )
    return -1;

  let start = 0;
  let total = 0;
  for (let i = 0; i < gas.length; i += 1) {
    total += gas[i] - cost[i];

    if (total < 0) {
      total = 0;
      start = i + 1;
    }
  }

  return start;
};
// @lc code=end
