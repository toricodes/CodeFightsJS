const expect = require('chai').expect;

// THE JOURNEY BEGINS
const add = require('../Exercises/TheJourneyBegins/add.js');
const centuryFromYear = require('../Exercises/TheJourneyBegins/centuryFromYear.js');
const checkPalindrome = require('../Exercises/TheJourneyBegins/checkPalindrome');

describe('add', function () {
    it('should return the sum of two numbers', function () {
        expect(add(2, 4)).to.equal(6);
        expect(add(4, 4)).to.equal(8);
        expect(add(-2, 4)).to.equal(2);
    });
    it('should throw a message indicating the error', function () {
        expect(add("1", "2")).to.equal('One or both of the parameters are not numbers');
        expect(add(1, "2")).to.equal('One or both of the parameters are not numbers');
        expect(add([1], 2)).to.equal('One or both of the parameters are not numbers');
    });
});

describe('centuryFromYear', function () {
   it('given a year, should return the century it is in', function () {
       expect(centuryFromYear(1905)).to.equal(20);
       expect(centuryFromYear(1700)).to.equal(17);
       expect(centuryFromYear(300)).to.equal(3);
   });
   it('should throw a message indicating the error', function () {
       expect(centuryFromYear("1")).to.equal('The parameter is not a number');
       expect(centuryFromYear("2")).to.equal('The parameter is not a number');
       expect(centuryFromYear([1])).to.equal('The parameter is not a number');
   });
});

describe('checkPalindrome', function () {
    it('should check if it is a string is a palindrome', function () {
        expect(checkPalindrome('Anna')).to.equal(true);
        expect(checkPalindrome('abac')).to.equal(false);
        expect(checkPalindrome('a')).to.equal(true);
    });
    it('should throw a message indicating the error', function () {
        expect(checkPalindrome(1)).to.equal('The input is not a string');
        expect(checkPalindrome([1])).to.equal('The input is not a string');
    });
});

// EDGE OF THE OCEAN
const adjacentElementsProduct = require('../Exercises/EdgeOfTheOcean/adjacentElementsProduct');

describe('adjacentElementsProduct', function () {
    it('should find the pair of adjacent elements that has the largest product and return it', function () {
        expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).to.equal(21);
        expect(adjacentElementsProduct([-1, -2])).to.equal(2);
        expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).to.equal(6);
        expect(adjacentElementsProduct([-23, 4, -3, 8, -12])).to.equal(-12);
        expect(adjacentElementsProduct([1, 0, 1, 0, 1000])).to.equal(0);
    });
});