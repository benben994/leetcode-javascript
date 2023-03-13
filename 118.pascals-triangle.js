/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let rows = [];

  for (let i = 0; i < numRows; i += 1) {
    let row = [1];
    for (let j = 1; j < i; j += 1) {
      row.push(rows[i - 1][j - 1] + rows[i - 1][j]);
    }
    row[i] = 1;

    rows.push(row);
  }

  return rows;
};

module.exports = generate;
// @lc code=end
