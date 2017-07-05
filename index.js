const morgan          = require('morgan');
const mongoose        = require('mongoose');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.Promise      = require('bluebird');
const bodyParser      = require('body-parser');
const express         = require('express');
const app             = express();
const routes          = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler    = require('./lib/errorHandler');


const { port, env, dbURI }    = require('./config/environment');

mongoose.connect(dbURI);

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));
if('test' !== env) app.use(morgan('dev'));

app.use(customResponses);
app.use('/api', routes);
app.use(errorHandler);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));


app.listen(port, () => console.log(`Express has started on port: ${port}`));
