import curry from './index.js';

/**
 * Sum
 * @param  {number} num1
 * @param  {number} num2
 * @param  {number} num3
 * @return {number}
 */
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

test('Function with fixed number of arguments', () => {
  const currySum = curry(sum);
  expect(currySum(1)(2)(3)).toBe(sum(1, 2, 3));
});
