/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */

var maxSatisfied1 = function (customers, grumpy, minutes) {
  let baseLine = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      baseLine += customers[i];
    }
  }

  let additional = 0;
  for (let i = 0; i < minutes && i < customers.length; i++) {
    if (grumpy[i] === 1) {
      additional += customers[i];
    }
  }

  let maxAdditional = additional;

  for (let i = minutes; i < customers.length; i++) {
    if (grumpy[i] === 1) additional += customers[i];
    if (grumpy[i - minutes] === 1) additional -= customers[i - minutes];
    maxAdditional = Math.max(maxAdditional, additional);
  }

  return baseLine + maxAdditional;
};

var maxSatisfied = function (customers, grumpy, minutes) {
  let baseLine = 0;

  let additional = 0;
  for (let i = 0; i < minutes && i < customers.length; i++) {
    if (grumpy[i] === 1) {
      additional += customers[i];
    } else {
      baseLine += customers[i];
    }
  }

  let maxAdditional = additional;

  for (let i = minutes; i < customers.length; i++) {
    if (grumpy[i] === 1) {
      additional += customers[i];
    } else {
      baseLine += customers[i];
    }
    if (grumpy[i - minutes] === 1) additional -= customers[i - minutes];
    maxAdditional = Math.max(maxAdditional, additional);
  }

  return baseLine + maxAdditional;
};

module.exports = { maxSatisfied };
