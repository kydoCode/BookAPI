const { Book, Author } = require('../models');
 
exports.createBook = async (req, res, next) => {
    try {
        const book = await Book.create(req.body);
        res.statut(201).json(book)
    } catch (error) {
        next(err)
    }
}
