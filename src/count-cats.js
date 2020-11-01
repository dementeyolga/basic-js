const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let concArr = [];
    matrix.forEach((arr) => {
        concArr = [...concArr, ...arr];
    });

    let counter = 0;
    for (let item of concArr) {
        if (item === "^^") counter++;
    }

    return counter;
};
