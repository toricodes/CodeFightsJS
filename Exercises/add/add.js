const add = (param1, param2) => {
    if (typeof param1 == 'number' && typeof param2 == 'number') {
        return param1 + param2
    }
    return 'One or both of the parameters are not numbers';
};

module.exports = add;