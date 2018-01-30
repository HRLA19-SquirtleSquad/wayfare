const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./routes');
// const validator = require('express-validator')
// DB?
import './config/database'



const app = express();
const PORT = process.env.PORT || 3000;

// app.use(validator());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use('/wayfare', router);

app.listen(PORT, (err) => {
  if (err) throw new Error;
  console.log('Listening to PORT:', PORT);
})