const sequelize = require('../config/database');
const Book = require('./book');
const BorrowLog = require('./borrowLog');

Book.hasMany(BorrowLog, { foreignKey: 'bookId' });
BorrowLog.belongsTo(Book, { foreignKey: 'bookId' });

module.exports = {
    sequelize,
    Book,
    BorrowLog
};