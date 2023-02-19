const mergeSort = require("../sorting/merge-sort");

test("Reverse", () => {
  expect(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Repeat numbers", () => {
  expect(mergeSort([1, 2, 2, 3, 1, 1])).toEqual([1, 1, 1, 2, 2, 3]);
});

test("Sorted", () => {
  expect(mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
