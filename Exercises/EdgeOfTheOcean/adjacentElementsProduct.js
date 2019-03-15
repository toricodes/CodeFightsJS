/* Given an array of integers, find the pair of adjacent elements
that has the largest product and return that product.

Example
For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product */

const adjacentElementsProduct = inputArray => {
    let prods = [];
    for (let i = 0; i < inputArray.length; i++) {
        let prod = inputArray[i] * inputArray[i + 1];
        if (!isNaN(prod)) {
            prods.push(prod);
        }
    }
    return Math.max.apply(null, prods);
};

module.exports = adjacentElementsProduct;