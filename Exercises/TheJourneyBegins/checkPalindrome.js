/* Given the string, check if it is a palindrome.

Example:
For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
For inputString = "abac", the output should be checkPalindrome(inputString) = false;
For inputString = "a", the output should be checkPalindrome(inputString) = true */

const checkPalindrome = str => {
    if (typeof str === 'string') {
        let lowerStr = str.toLowerCase();
        let reverseStr = lowerStr.split('').reverse().join('');
        return lowerStr === reverseStr;
    }
    return 'The input is not a string';
};

module.exports = checkPalindrome;