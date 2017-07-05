const router = require('express').Router();
const products = require('../controllers/products');
const users = require('../controllers/user');
const auth = require('../controllers/auth');
const orders = require('../controllers/orders');
const stripe = require('../controllers/stripe');
const imageUpload = require('../lib/imageUpload');
const secureRoute = require('../lib/secureRoute');
const oauth = require('../controllers/oauth');

router.route('/products')
.get(products.index)
.post(secureRoute, imageUpload, products.create);

router.route('/products/:id')
.all(secureRoute)
.get(products.show)
.put(imageUpload, products.update)
.delete(products.delete);

router.route('/user')
.get(users.index);

router.route('/user/:id')
.get(users.show)
.put(secureRoute, imageUpload, users.update)
.delete(secureRoute, users.delete);

router.route('/orders')
  .get(orders.index);

router.route('/orders/:id')
  .get(orders.show);

router.route('/payment')
  .post(secureRoute, stripe.processPayment);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/oauth/instagram')
  .post(oauth.instagram);


router.all('/*', (req, res) => res.notFound());


module.exports = router;
