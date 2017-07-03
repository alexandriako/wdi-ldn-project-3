const router = require('express').Router();
const products = require('../controllers/products');
const users = require('../controllers/user');
const auth = require('../controllers/auth');
const imageUpload = require('../lib/imageUpload');
const secureRoute = require('../lib/secureRoute');

router.route('/products')
.get(products.index)
.post(secureRoute, imageUpload, products.create);

router.route('/products/:id')
.all(secureRoute)
.get(products.show)
.put(products.update)
.delete(products.delete);

router.route('/user')
.get(users.index);

router.route('/user/:id')
.all(secureRoute)
.get(secureRoute, users.show)
.put(secureRoute, users.update)
.delete(secureRoute, users.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());


module.exports = router;
