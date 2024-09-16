// Index de model. Sert à définir les relations

const Book = require('./book');
const Author = require('./author');

// Define teh relationships

Book.belongsTo(Author);
Author.hasMany(Book);

module.exports = {
    Book,
    Author
};

