const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  transactionId: { type: String },
  products: [{
    product: { type: mongoose.Schema.ObjectId, ref: 'Product', required: true},
    quantity: { type: Number }, //the item's createdBy id number
    shipped: { type: Boolean, default: false }
  }]
});

module.exports = mongoose.model('Order', orderSchema);
