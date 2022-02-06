const authorize = (req, res, next) => {
    console.log("authorized")
    next();
}

module.exports = authorize