const twoSum = require("../1.two-sum");

test("#1", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("#2", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("#3", () => {
  expect(twoSum([5, 8, 12, 25], 37)).toEqual([2, 3]);
});
