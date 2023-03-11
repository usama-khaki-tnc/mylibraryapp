const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const borrowRoutes = require('./borrowRoutes');

router.use('/user', userRoutes);
router.use('/book', bookRoutes);
router.use('/borrow', borrowRoutes);

module.exports = router;