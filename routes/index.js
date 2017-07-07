'use strict'
const express = require('express');
const router = express.Router();
const images = require('../helpers/images')

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' });
});
router.post('/upload', 
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send(req.cloudStoragePublicUrl)
  })

module.exports = router;
