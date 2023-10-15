const fizzBuzz = require("../src/fizzbuzz");

test("not multiples of 3 and 5 should return itself", () => {
  expect(fizzBuzz(8)).toEqual(8);
});
