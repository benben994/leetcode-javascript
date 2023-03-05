const merge = require("../88.merge-sorted-array");

test("#1", () => {
  expect(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)).toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
});

test("#2", () => {
  expect(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)).toEqual([1, 2, 3, 4, 5, 6]);
});

test("#3", () => {
  expect(merge([0], 0, [1], 1)).toEqual([1]);
});
