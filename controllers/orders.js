const Order = require('../models/order');

function orderIndexRoute(req, res, next) {
  Order
    .find(req.query)
    .populate('products.product')
    .exec()
    .then((orders) => res.json(orders))
    .catch(next);
}

// function orderCreateRoute(req, res, next) {
//
//   req.body.createdBy = req.user;
//
//   Order
//     .create(req.body)
//     .then((order) => res.status(201).json(order))
//     .catch(next);
// }

function orderShowRoute(req, res, next) {
  Order
    .findById(req.params.id)
    .populate('createdBy products.product')
    .exec()
    .then((order) => {
      if(!order) return res.notFound();

      res.json(order);
    })
    .catch(next);
}

module.exports = {
  index: orderIndexRoute,
  // create: orderCreateRoute,
  show: orderShowRoute
};
