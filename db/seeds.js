const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Product = require('../models/product');


User.collection.drop();
Product.collection.drop();

User
.create([{
  username: 'origamiChick',
  email: 'alexandriako@yahoo.com',
  password: '123',
  passwordConfirmation: '123',
  description: 'Born in LA and raised in Tokyo, I am an avid collector of vintage jewelry and handmade pieces. On the side I like to peruse for hidden gems at thrift stores. Recently my partner and I launched our own fashion label.'
},{
  username: 'alexandriako',
  email: 'alexandriamhko@gmail.com',
  password: '123',
  passwordConfirmation: '123',
  description: 'Having graduated in graphic design, I currently dabble in graphic design, tattoo designs, and prints. My other passion is for furniture and interior design.'
}, {
  username: 'lunchbox',
  email: 'jasontrk12@gmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  description: ''
}, {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  description: ''
}, {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  description: ''
}, {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  description: ''
}])
.then((users) => {
  console.log(`${users.length} users created`);
  return Product
  .create([{
    name: '',
    category: '',
    price: '',
    quantity: '',
    image: '',
    description: '',
    createdBy: users[0]
  },{
    name: '',
    category: '',
    price: '',
    quantity: '',
    image: '',
    description: '',
    createdBy: users[0]
  }]);
})
.then((products) => console.log(`${products.length} products created`))
.catch((err) => console.log(err))
.finally(() => mongoose.connection.close());
