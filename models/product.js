const s3 = require('aws-sdk/clients/s3');

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  category: { type: String},
  price: { type: Number},
  quantity: { type: Number },
  image: { type: String },
  description: { type: String}
});

productSchema
.virtual('imageSRC')
.get(function getImageSRC() {
  if(!this.image) return null;
  if(this.image.match(/^http/) || this.image.substring(0,6) === '/image' ) return this.image;
  return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
});

productSchema
.path('image')
.set(function getPreviousImage(image) {
  this._image = this.image;
  return image;
});

productSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});

productSchema.pre('remove', function removeImage(next) {
  if(this.image) return s3.deleteObject({ Key: this.image }, next);
  next();
});



module.exports = mongoose.model('Product', productSchema);
