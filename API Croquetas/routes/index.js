const express = require('express');
const router = express.Router();

const indexRouter = require('../controllers/index/index');
const usersRouter = require('../controllers/users/index');

router.use('/', indexRouter);
router.use('/users', usersRouter);

module.exports = router;
