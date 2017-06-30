const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Product = require('../models/product');

mongoose.connect(dbURI);

Product.collection.drop();


name: { type: String, required: true },
category: { type: String, required: true },
price: { type: Number, required: true },
quantity: { type: Number },
image: { type: String },
description
