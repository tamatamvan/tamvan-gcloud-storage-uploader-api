'use strict'
//All Dependencies
const express = require('express')
const logger = require('morgan')

      //All Route Files
const routes = require('./routes/index')

      //Express Instance
const app = express()

//load environment variables with dotenv
require('dotenv').config()

app.use(require('cors')())
app.use(logger('dev'))

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    message: err.message,
    error: {}
  })
})


module.exports = app
