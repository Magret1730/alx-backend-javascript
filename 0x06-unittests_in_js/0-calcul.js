// Function rounds the two arguments and returns its sum

function calculateNumber(a, b) {
    const new_a = Math.round(a);
    const new_b = Math.round(b);

    return (new_a + new_b);
};

module.exports = calculateNumber;
