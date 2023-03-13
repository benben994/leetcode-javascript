/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let start = 0;
  let end = start + 1;
  let currentMax = 0;

  while (end < prices.length) {
    if (prices[end] > currentMax && prices[end] > prices[start]) {
      currentMax = prices[end];
      max += prices[end] - prices[end - 1];
    } else {
      start = end;
      currentMax = 0;
    }
    end += 1;
  }

  return max;
};

module.exports = maxProfit;
// @lc code=end
