
// our Custom Error Message  class to Extend The Inbuild Error Class
class CustomErrorMessage extends Error {
    constructor(message, statusCode) {
        supper(message);
        this.statusCode = statusCode;
    }
}

// a function to display Custom Errors, which is then exported,
// it is bassically an istance of the above class
const createCustomErrorMessage = (msg, statusCode) => {
    new CustomErrorMessage(msg, statusCode);
}

module.exports = {createCustomErrorMessage, CustomErrorMessage};