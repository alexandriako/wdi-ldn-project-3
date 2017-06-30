const router = require('express').Router();
const products = require('../controllers/products');
// const users = require('../controllers/users');
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

// router.route('/user/:id')
//   .get(); //need to write a user controller

// router.route('/register')
//   .post(auth.register);
//
// router.route('/login')
//   .post(auth.login);



module.exports = router;
