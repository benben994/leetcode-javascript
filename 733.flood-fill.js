/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const startColor = image[sr][sc];
  if (color === startColor) return image;

  const DFS = (img, row, col) => {
    if (row < 0 || row >= img.length || col < 0 || col >= img[row].length) return;
    if (img[row][col] !== startColor || img[row][col] === color) return;

    img[row][col] = color;

    DFS(img, row - 1, col, color);
    DFS(img, row, col - 1, color);
    DFS(img, row + 1, col, color);
    DFS(img, row, col + 1, color);

    return img;
  };

  return DFS(image, sr, sc);
};
// @lc code=end
