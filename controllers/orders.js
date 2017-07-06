const Order = require('../models/order');

function orderIndexRoute(req, res, next) {
  Order
    .find(req.query)
    .populate('products.product createdBy')
    .exec()
    .then((orders) => res.json(orders))
    .catch(next);
}

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


// function orderUpdateRoute(req, res, next) {
//   Order
//   .findById(req.params.id)
//   .exec()
//   .then((order) => {
//     if(!order) return res.notFound();
//
//     for(const field in req.body) {
//       order[field] = req.body[field];
//     }
//
//     return order.save();
//   })
//   .then((order) => res.json(order))
//   .catch(next);
// }

function orderUpdateRoute(req, res, next) {
  Order
    .findById(req.params.id)
    .exec()
    .then((order) => {
      if(!order) return res.notFound();

      const product = order.products.id(req.params.productId);
      product.shipped = !product.shipped;

      return order.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: orderIndexRoute,
  show: orderShowRoute,
  update: orderUpdateRoute
};
