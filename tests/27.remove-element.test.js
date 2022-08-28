const removeElement = require("../27.remove-element");

test("#1", () => {
  expect(removeElement([1, 1, 1], 1)).toBe(0);
});

test("#2", () => {
  expect(removeElement([0, 1, 2, 3], 4)).toBe(4);
});

test("#3", () => {
  expect(removeElement([0, 0, 1, 1, 0, 2], 0)).toBe(3);
});
