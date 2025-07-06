/**
 * @param {number[]} prices
 * @return {number}
 */
// O(n^2) failure performance
// var maxProfit = function (prices) {
//   let max = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i; j < prices.length; j++) {
//       if (prices[j] - prices[i] > max) {
//         max = prices[j] - prices[i];
//       }
//     }
//   }
//   return max;
// };

var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    let currentProfit = prices[i] - minPrice;

    maxProfit = Math.max(maxProfit, currentProfit);
  }
  return maxProfit;
};

module.exports = { maxProfit };
