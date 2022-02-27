/** Application for bank.ly */

const express = require('express');
const app = express();
const { ExpressError } = require("./helpers/expressError");
const { authUser } = require("./middleware/auth");
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use(express.json());
app.use(authUser);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);


/** 404 handler */
app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);
  // pass the error to the next piece of middleware
  return next(err);
});


/** general error handler */
app.use(function(err, req, res, next) {
  return res.status(err.status||500).json({
    message: err.message
  });
});

module.exports = app;


