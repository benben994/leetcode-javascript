/*
  Merge Sort
  Worst-case time complexity: O(n*log(n))
  Average-case time complexity: Theta(n*log(n))
  Best-case time complexity: Omega(n*log(n))
  Space complexity: O(n)
*/

const merge = (nums1, nums2) => {
  const result = [];
  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < nums1.length && secondIndex < nums2.length) {
    if (nums1[firstIndex] <= nums2[secondIndex]) {
      result.push(nums1[firstIndex]);
      firstIndex += 1;
    } else {
      result.push(nums2[secondIndex]);
      secondIndex += 1;
    }
  }

  if (firstIndex < nums1.length) {
    return result.concat(...nums1.slice(firstIndex));
  }
  if (secondIndex < nums2.length) {
    return result.concat(...nums2.slice(secondIndex));
  }
};

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;

  const mid = Math.floor(nums.length / 2);
  return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
};

module.exports = mergeSort;
