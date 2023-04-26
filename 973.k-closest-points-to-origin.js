/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

class MaxHeap {
  constructor(maxSize = 0) {
    this.heap = [];
    this.maxSize = maxSize;
  }

  getLength() {
    return this.heap.length;
  }

  getMax() {
    return this.heap[0] || null;
  }

  add(node, weightFunc) {
    this.heap.push(node);

    // shift up
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (currentIndex > 0 && weightFunc(this.heap[currentIndex]) > weightFunc(this.heap[parentIndex])) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }

    if (this.heap.length > this.maxSize) {
      this.removeMax(weightFunc);
    }
  }

  removeMax(weightFunc) {
    if (this.heap.length === 0) return null;

    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
    const max = this.heap.pop();
    let currentIndex = 0;
    let leftChildIndex = currentIndex * 2 + 1;
    let rightChildIndex = currentIndex * 2 + 2;
    while (leftChildIndex < this.heap.length) {
      let maxChildIndex = leftChildIndex;
      if (rightChildIndex < this.heap.length && weightFunc(this.heap[leftChildIndex]) < weightFunc(this.heap[rightChildIndex])) {
        maxChildIndex = rightChildIndex;
      }

      if (weightFunc(this.heap[currentIndex]) < weightFunc(this.heap[maxChildIndex])) {
        [this.heap[currentIndex], this.heap[maxChildIndex]] = [this.heap[maxChildIndex], this.heap[currentIndex]];
        currentIndex = maxChildIndex;
        leftChildIndex = currentIndex * 2 + 1;
        rightChildIndex = currentIndex * 2 + 2;
      } else {
        break;
      }
    }

    return max;
  }
}

const distance = (point) => {
  if (!point) return null;
  return point[0] * point[0] + point[1] * point[1];
};

var kClosest = function (points, k) {
  /* using sort, time complexity: O(n*log(n)) */
  // return points.sort((a, b) => distance(a) - distance(b)).slice(0, k);

  /* use max heap of size k */
  let maxHeap = new MaxHeap(k);

  for (let i = 0; i < points.length; i += 1) {
    if (maxHeap.getLength() < k || distance(points[i]) < distance(maxHeap.getMax())) {
      maxHeap.add(points[i], distance);
    }
  }

  return maxHeap.heap;
};

// @lc code=end
