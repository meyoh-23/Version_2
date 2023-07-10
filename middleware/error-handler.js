const errorHandler = (error, req, res, nex) => {
    res.status(error.status).json({message: error.message})
}
module.exports = errorHandler;