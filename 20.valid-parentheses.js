/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (["(", "[", "{"].includes(ch)) {
      stack.push(ch);
    } else if (stack.length > 0 && isParentheses(ch, stack[stack.length - 1])) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

const isParentheses = (a, b) => {
  if ((a === "(" && b === ")") || (b === "(" && a === ")")) {
    return true;
  }
  if ((a === "[" && b === "]") || (b === "[" && a === "]")) {
    return true;
  }
  if ((a === "{" && b === "}") || (b === "{" && a === "}")) {
    return true;
  }

  return false;
};

module.exports = isValid;
// @lc code=end
