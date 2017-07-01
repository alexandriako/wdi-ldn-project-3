const router = require('express').Router();
const products = require('../controllers/products');
const users = require('../controllers/user');
// const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');


router.route('/products/index')
.get(products.index)
.post(products.create);

router.route('/products/:id')
// .all(secureRoute)
.get(products.show)
.put(products.update)
.delete(products.delete);

router.route('/user/index')
.get(users.index);

router.route('/user/:id')
.get(users.show)
.put(users.update)
.delete(users.delete);




module.exports = router;
