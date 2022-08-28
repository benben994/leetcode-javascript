const removeDuplicates = require("../26.remove-duplicates-from-sorted-array");

test("#1", () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test("#2", () => {
  expect(removeDuplicates([0, 0, 0, 0, 0])).toBe(1);
});

test("#3", () => {
  expect(removeDuplicates([0, 0, 1, 1, 2, 2])).toBe(3);
});

test("#4", () => {
  expect(removeDuplicates([0, 1, 2, 3])).toBe(4);
});

test("#4", () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});
