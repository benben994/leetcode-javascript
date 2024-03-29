/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

const e = require("cors");

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lo = 1;
    let hi = n;

    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (isBadVersion(mid)) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
  };
};
// @lc code=end
