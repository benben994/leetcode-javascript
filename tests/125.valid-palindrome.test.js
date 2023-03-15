const isPalindrome = require("../125.valid-palindrome");

test("#1", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test("#2", () => {
  expect(isPalindrome("race a car")).toBe(false);
});

test("#3", () => {
  expect(isPalindrome(" ")).toBe(true);
});
