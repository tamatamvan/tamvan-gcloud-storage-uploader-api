'use strict'
const express = require('express');
const router = express.Router();
const images = require('../helpers/images')

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' });
});
router.post('/upload',
  (req, res, next) => {
    console.log('f : ', req.file)
    console.log('b : ', req.body)
    next()
  },
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send(req.cloudStoragePublicUrl)
  })

module.exports = router;
