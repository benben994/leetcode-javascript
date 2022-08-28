const intersection = require("../349.intersection-of-two-arrays");

test("#1", () => {
  expect(intersection([1, 2, 1], [2, 2])).toStrictEqual([2]);
});

test("#2", () => {
  expect(intersection([0, 1, 2, 3, 0, 0, 0, 1, 1], [0, 1, 2, 3, 0, 0, 0, 1, 1])).toStrictEqual([0, 1, 2, 3]);
});

test("#3", () => {
  expect(intersection([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).toStrictEqual([]);
});
