const Carousel = require('../models/carousel');

function carouselIndexRoute(req, res, next) {
  Carousel
    .find(req.query)
    .exec()
    .then((carousels) => res.json(carousels))
    .catch(next);
}

function carouselShowRoute(req, res, next) {
  Carousel
  .findById(req.params.id)
  .exec()
  .then((carousel) => {
    if(!carousel) return res.notFound();

    res.json(carousel);
  })
  .catch(next);
}

module.exports = {
  index: carouselIndexRoute,
  show: carouselShowRoute
};
