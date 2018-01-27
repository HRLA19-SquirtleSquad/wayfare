require()
const express = require('express');
const path = require('path');
const parser = require('body-parser');
// const validator = require('express-validator')
// DB?

const Router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(validator());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/api', Router);

app.listen(PORT, (err) => {
  if (err) throw new Error;
  console.log('Listening to PORT:', PORT);
})