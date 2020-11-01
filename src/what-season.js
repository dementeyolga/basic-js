const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) return "Unable to determine the time of year!";
    if (Object.prototype.toString.call(date) !== "[object Date]")
        throw new Error("Wrong");

    let month = date.getMonth();

    let season;
    switch (month) {
        case "0":
            season = "winter";
            break;

        case "1":
            season = "winter";
            break;
        case "2":
            season = "spring";
            break;
        case "3":
            season = "spring";
            break;
        case "4":
            season = "spring";
            break;
        case "5":
            season = "summer";
            break;
        case "6":
            season = "summer";
            break;
        case "7":
            season = "summer";
            break;
        case "8":
            season = "autumn";
            break;
        case "9":
            season = "autumn";
            break;
        case "10":
            season = "autumn";
            break;
        case "0":
            season = "winter";
            break;
    }

    return season;
};
