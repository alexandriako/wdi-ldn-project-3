const Product = require('../models/product');

function indexRoute(req, res, next) {
  Product
  .find()
  .exec()
  .then((products) => res.json(products))
  .catch(next);
}

function createRoute(req, res, next) {
<<<<<<< HEAD
  if(req.file) req.body.image = req.file.filename;
=======

  if(req.file) req.body.image = req.file.filename;
  req.body.createdBy = req.user;
>>>>>>> e3b88913ffc28aeed1ff00c67514894debf4e664

  Product
  .create(req.body)
  .then((product) => res.status(201).json(product))
  .catch(next);
}

function showRoute(req, res, next) {
  Product
  .findById(req.params.id)
  .exec()
  .then((product) => {
    if(!product) return res.notFound();

    res.json(product);
  })
  .catch(next);
}

function updateRoute(req, res, next) {
  if(req.file) req.body.image = req.file.filename;
  Product
  .findById(req.params.id)
  .exec()
  .then((product) => {
    if(!product) return res.notFound();

    for(const field in req.body) {
      product[field] = req.body[field];
    }

    return product.save();
  })
  .then((product) => res.json(product))
  .catch(next);
}

function deleteRoute(req, res, next) {
  Product
  .findById(req.params.id)
  .exec()
  .then((product) => {
    if(!product) return res.notFound();

    return product.remove();
  })
  .then(() => res.status(204).end())
  .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
