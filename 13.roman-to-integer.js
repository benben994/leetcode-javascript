/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let stack = [];
  let sum = 0;
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length || stack.length; i += 1) {
    let ch = s[i];
    if (stack.length) {
      let lastCh = stack.pop();
      if ((ch === "V" || ch === "X") && lastCh === "I") {
        sum -= romanToIntMap.I;
      } else if ((ch === "L" || ch === "C") && lastCh === "X") {
        sum -= romanToIntMap.X;
      } else if ((ch === "D" || ch === "M") && lastCh === "C") {
        sum -= romanToIntMap.C;
      } else {
        sum += romanToIntMap[lastCh];
      }
    }
    if (ch) stack.push(ch);
  }

  return sum;
};
// @lc code=end
