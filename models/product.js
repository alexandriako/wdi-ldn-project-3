const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number },
  image: { type: String },
  description: { type: true }
});


module.exports = mongoose.model('Product', productSchema);
