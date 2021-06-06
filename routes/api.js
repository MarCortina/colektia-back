const express = require('express');
const router = express.Router();

const apiFilmsRouter = require('./api/films');

router.use('/films', apiFilmsRouter);


module.exports = router;