const User = require('../models/user');

function indexRoute(req, res, next) {
  User
    .find()
    .exec()
    .then((users) => res.json(users))
    .catch(next);
}

function createRoute(req, res, next) {
  User
    .create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next);
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate({
      path: 'outgoingOrders',
      populate: { path: 'products.product' }
    })
    .fill('incomingOrders')
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      res.json(user);
    })
    .catch(next);
}


function updateRoute(req, res, next) {
  console.log(req.file);
  if(req.file) req.body.image = req.file.filename;

  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      for(const field in req.body) {
        user[field] = req.body[field];
      }

      return user.save();
    })
    .then((user) => res.json(user))
    .catch(next);
}

function deleteRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      return user.remove();
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
