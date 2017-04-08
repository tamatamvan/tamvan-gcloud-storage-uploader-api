# Tamvan Express ES6
Tamvan Express ES6 is a simple scaffolding for building REST API using ExpressJS Framework and also ES6 (even still not the full ES6).

Actually it's only the minimal version of ExpressJS scaffolding which came from express-cli generator. I only add a little modification with changing the variable using ES6 syntax (`const`, `let`) and arrow function (`=>`). I also add some directories (`controllers`, `helpers`, and `models`) for MVC structure.

The view engine is not available by default, as this scaffolding is focused for building a REST API.

## Basic Information and Dependencies (package.json)

```json
{
  "name": "tamvan-express-es6",
  "version": "0.1.0",
  "private": false,
  "public": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "dotenv": "^4.0.0",
    "express": "~4.13.4",
    "morgan": "~1.7.0"
  }
}
```

## File structure

```bash
.
├── README.md
├── app.js
├── bin
│   └── www
├── controllers
│   └── index.js
├── helpers
│   └── index.js
├── models
│   └── index.js
├── package.json
└── routes
    ├── index.js
    └── users.js
```

## Getting Started

```bash
git clone https://github.com/tamatamvan/tamvan-express-es6 your_directory_name

cd your_directory_name

npm install

npm run dev `# running the server for development`

`#or`

npm start `# running the server for production`
```
If you want to use environment variable just edit the `.env.template` file and fill it with your environment variable.

## The MIT License
Copyright 2017 - Septian A Tama (tamatamvan)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
