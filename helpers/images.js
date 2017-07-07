'use strict'
require('dotenv').config()

const Storage = require('@google-cloud/storage');

const CLOUD_BUCKET = process.env.CLOUD_BUCKET;

const storage = Storage({
  projectId: process.env.GCLOUD_PROJECT
});
const bucket = storage.bucket(CLOUD_BUCKET);

const getPublicUrl = (filename) => {
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;
}

const Multer = require('multer'),
      multer = Multer({
        storage: Multer.MemoryStorage,
        limits: {
          fileSize: 5 * 1024 * 1024
        }
      })