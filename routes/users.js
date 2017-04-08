'use strict'
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send({ message: 'this endpoint should be used for user listing' });
});

module.exports = router;
