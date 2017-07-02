const morgan          = require('morgan');
const mongoose        = require('mongoose');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.Promise      = require('bluebird');
const bodyParser      = require('body-parser');
const express         = require('express');
const app             = express();
const routes          = require('./config/routes');

var cors              = require('cors');
var stripe            = require('stripe')('sk_test_CTZ2JQpQsS5LHPLTWutqqyeq');
const { port, env, dbURI }    = require('./config/environment');

mongoose.connect(dbURI);


app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:7000'
}));
app.post('/payment', function(req, res) {
  var token = req.body.token;
  console.log(charge);

  var charge = stripe.charges.create({
    amount: parseInt(parseFloat(req.body.amount * 100), 10),
    currency: req.body.currency,
    source: token,
    description: 'TEST'
  },
  function(err, charge) {
    console.log(charge);
    if(err) {
      return res.status(500).json({ message: err });
    }
    res.status(200).json({ message: 'Payment successful' });
  });
});


app.use(express.static(`${__dirname}/public`));
if('test' !== env) app.use(morgan('dev'));
app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));


app.listen(port, () => console.log(`Express has started on port: ${port}`));
