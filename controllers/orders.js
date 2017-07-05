const Order = require('../models/order');

function orderIndexRoute(req, res, next) {
  Order
    .find(req.query)
    .exec()
    .then((orders) => res.json(orders))
    .catch(next);
}

function orderCreateRoute(req, res, next) {

  // if(req.file) req.body.image = req.file.filename;
  // req.body.createdBy = req.user;

  Order
    .create(req.body)
    .then((order) => res.status(201).json(order))
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

module.exports = {
  index: orderIndexRoute,
  create: orderCreateRoute,
  show: orderShowRoute
};
