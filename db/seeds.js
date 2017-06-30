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
  username: 'mikedg',
  email: 'mike@mike',
  password: 'password',
  passwordConfirmation: 'password',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
    name: 'Rattle Bumble Bees Toy',
    category: 'Kids',
    price: 1300,
    quantity: 12,
    image: 'rattle-bumble-beestoy.jpg',
    description: 'Realistic, Soft and Cuddly making a perfect all in one soother, calmer and toy for your little ones.A set of 3 x handmade with safety eyes , colourfull and realistic bumble bees rattle which can be hung anywhere around your baby, be it indoors on cots, swingers, chairs, bed or even outdoors on babies pram, pushchair or car seat keeping your little ones amused, soothed and interested.....A fantastic must have investment.',
    createdBy: users[0]
  },{
    name: 'Turtle Baby Rattle Toy',
    category: 'Kids',
    price: 400,
    quantity: 14,
    image: 'turtle-baby-rattle-toy.jpg',
    description: 'This beautiful handmade colourful and realistic turtle rattle toy is made from 100 % cotton organic and includes high quality bpa free teething circle chain , which can be hung anywhere around your baby, be it indoors on cots, swingers, chairs, bed or even outdoors on babies pram, pushchair or car seat ultimately keeping your little ones quiet, amused, soothed and interested.....An essential must have investment.',
    createdBy: users[0]
  }, {
    name: 'Organic Baby Teething Toy',
    category: 'Kids',
    price: 1400,
    quantity: 3,
    image: 'organic-baby-teething-toy.jpg',
    description: 'Handmade from hard wood then finished with beeswax and olive oil, this teething ring features a perfectly pink floral design in organic cotton jersey. The teether is lined with organic cotton plush which is so soft and super absorbent. ',
    createdBy: users[0]
  }, {
    name: 'Dinosaur taggy toy',
    category: 'Kids',
    price: 1700,
    quantity: 50,
    image: 'dinosaur-taggy-toy.jpg',
    description: 'One for the baby palaeontologists out there, meet our Diplotagus dinosaur toy. This plush dinosaur is a taggy toy. ‘Diplotagus’ has been lovingly created using a baby blue plush fabric. The toy has ribbons firmly stitched on, forming the taggy spikes of this cuddly,prehistoric addition to our collection. The ribbons have been carefully selected to compliment the colours in the plush fabric. The ribbons are all short loops to ensure there is no risk of choking.',
    createdBy: users[0]
  }, {
    name: 'ALFIE -Wooden Rabbit Stacking Puzzle',
    category: 'Kids',
    price: 2500,
    quantity: 10,
    image: 'wooden-rabbit-stacking-puzzle.jpg',
    description: 'Lovely gift idea for boys and girls.An organic, eco-friendly. Made from raw beech wood which makes him a delight to touch. The toy has been lovingly handcrafted using sustainable wood and non toxic finishes so completely safe for your child.',
    createdBy: users[0]
  },
  {
    name: 'Soft sole french bulldog baby shoes',
    category: 'Kids',
    price: 1000,
    quantity: 3,
    image: 'soft-sole-french-bulldog-baby-shoes.jpg',
    description: 'This shoe is fully lined with fleece and all seams are concealed within the shoe making it more comfortable for baby to wear.The soles are a soft durable faux suede. ',
    createdBy: users[0]
  },{
    name: 'Nursery Decor- Toy Camera',
    category: 'Kids',
    price: 3000,
    quantity: 30,
    image: 'nursery-decor--toy-camera.jpg',
    description: 'Wooden camera sculpture/ toy & 3 wooden cloud baby blocks. Carefully painted & sealed with a gloss sealer.',
    createdBy: users[0]
  },{
    name: 'Mind The Gap self striping sock yarn',
    category: 'Crafts',
    price: 2500,
    quantity: 10,
    image: 'mind-the-gap-self-striping-sock-yarn.jpg',
    description: 'This is a self striping sock yarn, which means it will pattern into bold, colourful stripes as you knit. Each stripe will be approximately six rows wide (12mm, half an inch) depending on your gauge and the number of stitches you cast on. The sequence of colours will vary between dye lots, and will not necessarily be in the same order as the sock in the photograph.',
    createdBy: users[0]
  }, {
    name: 'Knitting Kit: Beginners Super Chunky Fox ',
    category: 'Crafts',
    price: 800,
    quantity: 2,
    image: 'knitting-kit-beginners-super-chunky-fox.jpg',
    description: 'If you\'re crafty and love foxes then this is the project for you! It\'s a great kit for beginners or a hat that can be made up in just an evening by a more experienced knitter - I can make one in an hour!',
    createdBy: users[0]
  },{
    name: 'Knitting Kit:Faux ',
    category: 'Crafts',
    price: 600,
    quantity: 2,
    image: 'knitting-kit-faux.jpg',
    description: 'If you\'re crafty and love bears then this is the project for you! It\'s a great kit for beginners or a scarf that can be made up in just an evening by a more experienced knitter.The scarf is knitted up using just the knit stitch, or \'garter\' stitch (knitting every row). The pattern includes a \'beginners\' and \'experienced\' version, both are exactly the same, however the beginners features tips to help with each part of the pattern.',
    createdBy: users[0]
  }, {
    name: 'Golden Gate Bridge, paper model kit',
    category: 'Crafts',
    price: 600,
    quantity: 100,
    image: 'golden-gate-bridge-paper-model-kit.jpg',
    description: 'This beautiful suspension bridge is a beloved symbol of San Francisco. You can build your own Golden Gate bridge with this kit, following detailed step-by-step setup diagrams and instructions in English, German or Latvian. Now it\'s your turn time to play engineering!',
    createdBy: users[0]
  }, {
    name: 'Rice decoupage paper',
    category: 'Crafts',
    price: 200,
    quantity: 90,
    image: 'rice-decoupage-paper.jpg',
    description: 'Decoupage rice paper size 297 * 210mm (8.27 inches * 11.69 inches). Print the map in the high-end thin (about 30g density) of rice paper. Unlike mulberry paper, this paper no streaks and foreign inclusions, our paper has a uniform structure, which is very important if you want to get a flat and neat surface of the product. Paper is very convenient and practical to use - it does not tear or bubbles during application.',
    createdBy: users[0]
  }, {
    name: 'Bee mini sketchbook',
    category: 'Crafts',
    price: 500,
    quantity: 43,
    image: 'bee-mini-sketchbook.jpg',
    description: 'This handmade wire bound notebook is perfect for sketching, writing poems, scrapbooking, travel journalling and any other creative activities. The journal in A6 size contains 25 blank BROWN sheets of eco friendly recycled paper in 250gsm weight and 5 inserted pages of various gorgeous silk pressed and patterned paper.',
    createdBy: users[0]
  }, {
    name: 'Swim Fabric: Paradise Pineapple ',
    category: 'Crafts',
    price: 50,
    quantity: 200,
    image: 'swim-fabric-paradise-pineapple .jpg',
    description: 'Sold by the 1/2 yard. For 1 yard choose a quantity of "2". Your order will be cut continuously.Tossed pineapples on black and white striped UV 50+ swimsuit fabric. Chlorine and saltwater resistant.',
    createdBy: users[0]
  }, {
    name: 'Red Mudcloth Pillow',
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
