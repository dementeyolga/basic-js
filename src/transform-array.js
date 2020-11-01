const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
    let transformed = [];

    for (let i = 0; i < array.length; i++) {
        if (
            i === 0 &&
            (array[i] === "--discard-prev" || array[i] === "--double-prev")
        ) {
            continue;
        } else if (
            i === array.length - 1 &&
            (array[i] === "--discard-next" || array[i] === "--double-next")
        ) {
            continue;
        } else if (array[i] === "--discard-next") {
            i = i + 1;
        } else if (
            array[i] === "--discard-prev" &&
            array[i - 2] === "--discard-next"
        ) {
            continue;
        } else if (array[i] === "--discard-prev") {
            transformed.pop();
        } else if (
            array[i - 2] === "--discard-next" &&
            array[i] === "--double-prev"
        ) {
            continue;
        } else if (array[i] === "--double-next") {
            transformed.push(array[i + 1]);
        } else if (array[i] === "--double-prev") {
            transformed.push(transformed[transformed.length - 1]);
        } else {
            transformed.push(array[i]);
        }
    }
    return transformed;
};
