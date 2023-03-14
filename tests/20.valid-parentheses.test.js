const isValid = require("../20.valid-parentheses");

test("#1", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("#2", () => {
  expect(isValid("(]")).toBe(false);
});

test("#3", () => {
  expect(isValid("([{}])()[]")).toBe(true);
});
