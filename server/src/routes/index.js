const express = require('express');

const router = express.Router();

const userRouter = require('./user.route');
const authRouter = require('./auth.route');

router.use('/user', userRouter);
router.use('/auth', authRouter);

module.exports = router;