const expect = require('chai').expect;
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