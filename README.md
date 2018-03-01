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

# API Endpoints
| Route | Method | Desc |
|-------|--------|------|
| `/upload` | POST | Upload the image file to GC Storage, and return the public link of the images |

# Before You Run It

There are somethings that you need to do before you can run this app. 
  1.  Make sure you have Google Cloud Platform account, if you don't have any, it's the right time to sign up.
  2. If you already have an account, make sure you have at least a bucket in your Google Cloud Storage.
  3. Get your project id and your bucket name.
  4. Then, fill your project id and bucket name, in `.env-template` file, and rename the file to `.env`
  5. Get your service credentials account and download the private key in `JSON` format. For doing so, you can follow this [documentation](https://cloud.google.com/storage/docs/authentication#service_accounts) or this [youtube video](https://www.youtube.com/watch?v=tSnzoW4RlaQ)
  6. Move and your JSON private key file to this app directory with the name `keyfile.json`
  7. After doing the previous 6 steps, now, you're ready to run this app. Just run `npm start` command, and everything should be good

# Using it 

For using it, you can use tools such as Postman for simulating API Request to http://localhost;3000/upload, with form type using form-data, which contain image field filled with image file.
