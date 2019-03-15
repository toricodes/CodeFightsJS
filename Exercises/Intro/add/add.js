/* Write a function that returns the sum of two numbers.
Example:
For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3 */

const add = (param1, param2) => {
    if (typeof param1 == 'number' && typeof param2 == 'number') {
        return param1 + param2
    }
    return 'One or both of the parameters are not numbers';
};

module.exports = add;