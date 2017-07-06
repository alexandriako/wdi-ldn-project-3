const mongoose = require('mongoose-fill');
const bcrypt = require('bcrypt');
const s3 = require('../lib/s3');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  image: { type: String },
  email: { type: String, unique: true },
  instagramId: { type: Number },
  password: { type: String },
  description: { type: String },
  addressLineOne: { type: String },
  addressLineTwo: { type: String },
  city: { type: String },
  postCode: { type: String }
});

userSchema
  .virtual('outgoingOrders', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'createdBy'
  });

// talk about this in the presentation - for reals
userSchema
  .fill('incomingOrders') //virtual for getting any orders incoming
  .get(function getIncomingOrders(done) {
    this.model('Product') // look in the products model
      .find({ createdBy: this._id }) //for any product's createdBy key that match current u id
      .exec()
      .then(products => { //then with that array
        const productIds = products.map(product => product._id); //map pull out just their ids
        return this.model('Order') //then look in the order model
          .find({ 'products.product': { $in: productIds } }) //pull out any orders that have products that match the ids in the array
          .populate('products.product createdBy') //show me the info
          .exec(done);
      });
  });

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
  });

userSchema.pre('remove', function removeImage(next) {
  if(!this.image) return next();
  s3.deleteObject({ Key: this.image }, next);
});


userSchema.pre('validate', function checkPassword(next) {
  if(!this.password && !this.instagramId) {
    this.invalidate('password', 'required');
  }
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre('remove', function removeUserProducts(next) {
  this.model('Product').remove({ createdBy: this.id }, next);
});

module.exports = mongoose.model('User', userSchema);
