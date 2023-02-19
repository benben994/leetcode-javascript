const bubbleSort = require("../sorting/bubble-sort");

test("Reverse", () => {
  expect(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Repeat numbers", () => {
  expect(bubbleSort([1, 2, 2, 3, 1, 1])).toEqual([1, 1, 1, 2, 2, 3]);
});

test("Sorted", () => {
  expect(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
