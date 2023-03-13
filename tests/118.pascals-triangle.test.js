const generate = require("../118.pascals-triangle");

test("#1", () => {
  expect(generate(1)).toEqual([[1]]);
});

test("#2", () => {
  expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
});

test("#3", () => {
  expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
});
