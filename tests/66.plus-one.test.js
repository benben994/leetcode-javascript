const plusOne = require("../66.plus-one");

test("#1", () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});

test("#2", () => {
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});

test("#3", () => {
  expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
});
