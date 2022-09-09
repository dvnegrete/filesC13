function logsError(err, req, res, next) {
    console.log("Error detectado")
    console.error(err.code)
    next(err)
}

function errorHandler(err, req, res, next) {
    res.json({
        "error": err,        
    });
}

module.exports = { logsError, errorHandler }