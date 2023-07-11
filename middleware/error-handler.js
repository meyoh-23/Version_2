const {CustomErrorMessage} = require('./../errors/custom-error-message');

const errorHandler = (error, req, res, nex) => {
    if (error instanceof CustomErrorMessage) {
        return res.status(error.statusCode).json({message: error.message});
    }
    return res.status(500).json({message: `Somethin Went wrong, please try again!`})
}
module.exports = errorHandler;