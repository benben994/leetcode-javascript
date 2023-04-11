/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let stackS = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "#") {
      stackS.pop();
    } else {
      stackS.push(s[i]);
    }
  }
  let stackT = [];
  for (let i = 0; i < t.length; i += 1) {
    if (t[i] === "#") {
      stackT.pop();
    } else {
      stackT.push(t[i]);
    }
  }

  if (stackS.length !== stackT.length) return false;
  for (let i = 0; i < s.length; i += 1) {
    if (stackS[i] !== stackT[i]) return false;
  }
  return true;
};
// @lc code=end
