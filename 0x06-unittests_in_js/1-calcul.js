// Function rounds the two arguments and returns its sum

function calculateNumber(type, a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw TypeError;
    }

    const new_a = Math.round(a);
    const new_b = Math.round(b);

    if (type === 'SUM') {
        return (new_a + new_b);
    } else if (type === 'SUBTRACT') {
        return (new_a - new_b);
    } else if (type === 'DIVIDE') {
        if (new_b === 0) {
            throw new TypeError('Error')
        }
        return (new_a / new_b);
    } else {
        throw new TypeError('Error');
    }
};

module.exports = calculateNumber;

// const ans = calculateNumber('SUM', 1.4, 4.5);
// console.log(ans);
