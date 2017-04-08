'use strict'
const express = require('express');
const router = express.Router();

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' });
});

module.exports = router;
