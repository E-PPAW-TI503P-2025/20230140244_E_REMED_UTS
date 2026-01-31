const express = require('express');
const router = express.Router();
const { isAdmin, isUser } = require('../middleware/authMiddleware');
const bookController = require('../controllers/bookController');
const borrowController = require('../controllers/borrowController');

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);

router.post('/books', isAdmin, bookController.createBook);
router.put('/books/:id', isAdmin, bookController.updateBook);
router.delete('/books/:id', isAdmin, bookController.deleteBook);

router.post('/borrow', isUser, borrowController.borrowBook);

module.exports = router;