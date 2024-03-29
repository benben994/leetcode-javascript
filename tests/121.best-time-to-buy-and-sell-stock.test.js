const maxProfit = require("../121.best-time-to-buy-and-sell-stock");

test("#1", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test("#2", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});

test("#3", () => {
  expect(maxProfit([9, 9, 9])).toBe(0);
});
