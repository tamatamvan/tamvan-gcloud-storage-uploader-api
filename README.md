# Tamvan GCStroge Uploader API

Tamvan GCStroge Uploader API is a simple API implementation for uploading image files to Google Cloud Storage. It was built using [nodejs](https://nodejs.org/en/), [express.js](https://expressjs.com/), and [@google-cloud/storage](https://www.npmjs.com/package/@google-cloud/storage) package.

# File and Directories
```bash
.
├── LICENSE
├── README.md
├── app.js
├── bin
│   └── www
├── helpers
│   └── images.js
├── keyfile.json
├── package.json
└── routes
    └── index.js
```

# Package Information and Dependecies

```json
{
  "name": "tamvan-gcp-storage-uploader",
  "version": "0.1.0",
  "private": false,
  "public": true,
  "keywords": "google, cloud, platform, storage, file, upload",
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  "dependencies": {
    "@google-cloud/storage": "^1.2.0",
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.3",
    "debug": "~2.2.0",
    "dotenv": "^4.0.0",
    "express": "~4.13.4",
    "morgan": "~1.7.0",
    "multer": "^1.3.0"
  }
}
```
