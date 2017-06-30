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
}
, {
  username: 'lunchbox',
  email: 'jasontrk12@gmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  description: ''
}, {
  username: 'j-man',
  email: 'jasontrk@hotmail.co.uk',
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
}
])
.then((users) => {
  console.log(`${users.length} users created`);
  return Product
  .create([{
    name: 'Rust Mudcloth Pillow',
    category: 'Home & Living',
    price: '75',
    quantity: '5',
    image: '',
    description: 'Crafted from recycled African fabrics, this mudcloth pillow is handmade in my studio in Los Angeles. Each pillow is unique looking due to the nature of the fabric and comes with a pillow insert. Quantity is very limited.',
    createdBy: users[1]
  },{
    name: 'Jasper Earrings',
    category: 'Fashion',
    price: 200,
    quantity: 1,
    image: '',
    description: 'One of a kind earrings, certified vintage. Made from Jasper stone, these earrings display a unique marble design in green and blue hues. Only one pair available and they come in a nicely packaged box.',
    createdBy: users[0]
  },{
    name: 'Born This Way Embroidered Jean Jacket',
    category: 'Fashion',
    price: 250,
    quantity: 10,
    image: '',
    description: 'A quirky addition to your wardrobe, this jean jacket is hand embroidered and bedazzled. Material is light enough for warm weather. One size fits all!',
    createdBy: users[0]
  },
  {
    name: 'Turquoise Rings',
    category: 'Fashion',
    price: 50,
    quantity: 25,
    image: '',
    description: 'Beautiful collection of rings made of Turquoise and hammered silver. Each ring has an adjustable band. Every stone will look different due to it being handmade.',
    createdBy: users[0]
  },
  {
    name: 'Geometric Abstract Print',
    category: 'Home & Living',
    price: 82,
    quantity: 10,
    image: '',
    description: 'A handrawn print of only 5 copies, this piece is limited edition. Materials used include parchment, high grade ink, and paint. It comes unframed.',
    createdBy: users[1]
  },
  {
    name: 'Nautalis Necklace',
    category: 'Fashion',
    price: 82,
    quantity: 2,
    image: '',
    description: 'Perfect for any beach lover. My nautalis necklace is crafted from recycled shells (no critters were killed for this jewelry). The fit is shorter for this necklace as it is close to a choker.',
    createdBy: users[0]
  },
  {
    name: 'Love Poster',
    category: 'Home & Living',
    price: 35,
    quantity: 25,
    image: '',
    description: 'Cute poster for the home, with the print "I fell in love here." This poster is printed onto white parchment and comes unframed.',
    createdBy: users[1]
  },
  {
    name: 'Indigo Mudcloth Pillow',
    category: 'Home & Living',
    price: 35,
    quantity: 10,
    image: '',
    description: 'Crafted from recycled African fabrics, this mudcloth pillow is handmade in my studio in Los Angeles. Each pillow is unique looking due to the nature of the fabric and comes with a pillow insert. Quantity is very limited.',
    createdBy: users[1]
  },
  {
    name: 'Gold & Diamond Ring',
    category: 'Fashion',
    price: 500,
    quantity: 5,
    image: '',
    description: 'Perfect as a gift for your loved one or even as a promise ring. A 0.5 carat diamond is set in 18k gold with a matching, stackable golden band. Please enquire for sizing.',
    createdBy: users[0]
  },
  {
    name: 'Vintage Blue Chair',
    category: 'Home & Living',
    price: 32,
    quantity: 1,
    image: '',
    description: 'A comfy and retro chair for your living room or balcony. Blue and white mesh decorate the backrest and seat of the chair and a cantilevered base, also known as a "Floofle", supports your weight.',
    createdBy: users[1]
  }
  ]);
})
.then((products) => console.log(`${products.length} products created`))
.catch((err) => console.log(err))
.finally(() => mongoose.connection.close());
