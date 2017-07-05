const Order = require('../models/order');
var stripe = require('stripe')('sk_test_CTZ2JQpQsS5LHPLTWutqqyeq');

function processPayment(req, res, next) {
  const token = req.body.token;

  stripe.charges.create({
    amount: parseInt(parseFloat(req.body.amount * 100), 10),
    currency: req.body.currency,
    source: token,
    description: 'TEST'

  }, (err, transactionData) => {

    // console.log(transactionData, req.body.items);
    const items = req.body.items.map((item) => {
      return { product: item._id, quantity: item._quantity };
    });

    console.log(req.body);
    Order
    .create({
      createdBy: req.user,
      transactionId: transactionData.id,
      products: items
    });
  })
  .then((err) => {
    if(err) {
      return res.status(500).json({ message: err });
    }
    res.status(200).json({ message: 'Payment successful' });
  })
  .catch(next);
}


module.exports = {
  processPayment
};
