const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const cors           = require('cors');
const morgan         = require('morgan');
const chalk          = require('chalk');

const DB_CONFIG      = require('./config/db');
const Routes         = require('./api/routes');
const PORT = 8181;

const CAT = process.env.CAT || false

const morganMiddleware = morgan(function (tokens, req, res) {


  return [
      '\n',
      chalk.hex('#ff4757').bold('🍄  ВСПЫШКА СПРАВА --> '),
      chalk.hex('#34ace0')(tokens.method(req, res)),
      chalk.hex('#ffb142')(tokens.status(req, res)),
      chalk.hex('#ff5252')(tokens.url(req, res)),
      chalk.hex('#2ed573')(tokens['response-time'](req, res) + ' ms'),
      chalk.hex('#f78fb3')('@ ' + tokens.date(req, res)),
      chalk.yellow(tokens['remote-addr'](req, res)),
      // chalk.hex('#fffa65')('from ' + tokens.referrer(req, res)),
      chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
      '\n',
  ].join(' ');
});

app.use(cors())

app.use(morganMiddleware)

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true, useNewUrlParser: true }));

if (CAT) {
  const imageToAscii   = require("image-to-ascii");
  // Passing options to ASCII
  imageToAscii("./imgs/cat.png", {
    // colored: false,
    pxWidth: 5,
    white_bg: false
  }, (err, converted) => {
    console.log(err || converted);
  });
}



async  function connect () {
  await MongoClient.connect(DB_CONFIG.url, (err, database) => {
    if (err) return console.log(err)
    console.log('Connected.')
    Routes(app, database);
    app.listen(PORT, () => {
      console.log('We are live on ' + PORT);
    });
  })
}

connect()

