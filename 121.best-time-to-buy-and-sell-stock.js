/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
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
  while (end < prices.length) {
    if (prices[end] > prices[start]) {
      max = Math.max(max, prices[end] - prices[start]);
    } else {
      start = end;
    }

    end += 1;
  }

  return max;
};

module.exports = maxProfit;
// @lc code=end
