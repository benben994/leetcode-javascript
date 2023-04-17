/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

const create2DArray = (row, col, value) => {
  let arr = new Array(row);

  for (let i = 0; i < row; i += 1) {
    arr[i] = new Array(col).fill(value);
  }

  return arr;
};

const isValidCell = (row, col, mat) => {
  return row >= 0 && col >= 0 && row < mat.length && col < mat[row].length;
};

var updateMatrix = function (mat) {
  let m = mat.length;
  let n = mat[0].length;
  let distance = create2DArray(m, n, Infinity);
  let queue = [];

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (!mat[i][j]) {
        distance[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  let depth = 1;
  let positions = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];
  while (queue.length) {
    let queueLen = queue.length;
    for (let i = 0; i < queueLen; i += 1) {
      let [row, col] = queue.shift();

      for (let [moveRow, moveCol] of positions) {
        if (isValidCell(row + moveRow, col + moveCol, mat) && distance[row + moveRow][col + moveCol] > depth) {
          distance[row + moveRow][col + moveCol] = depth;
          queue.push([row + moveRow, col + moveCol]);
        }
      }
    }

    depth += 1;
  }

  return distance;
};
// @lc code=end
