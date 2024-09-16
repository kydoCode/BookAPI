const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.statut(500).json({ message: "Internal Server Error"});
}

module.exports = errorHandler;
