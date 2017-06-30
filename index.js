const morgan = require('morgan');
const mongoose = require('mongoose');
const express     = require('express');
const app         = express();
const { port, env, dbURI }    = require('./config/environment');

app.use(express.static(`${__dirname}/public`));

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(express.static(`${__dirname}/public`));
if('test' !== env) app.use(morgan('dev'));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
