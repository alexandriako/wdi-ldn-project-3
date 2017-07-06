
const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Product = require('../models/product');
const Carousel = require('../models/carousel');
const Order = require('../models/order');



User.collection.drop();
Product.collection.drop();
Carousel.collection.drop();
Order.collection.drop();


User
.create([{
  username: 'origamiChick',
  image: '/images/origamiChick.jpg',
  email: 'alexandriako@yahoo.com',
  password: '123',
  passwordConfirmation: '123',
  description: 'Born in LA and raised in Tokyo, I am an avid collector of vintage jewelry and handmade pieces. On the side I like to peruse for hidden gems at thrift stores. Recently my partner and I launched our own fashion label.',
  addressLineOne: '123 Awesome Lane',
  addressLineTwo: 'Maryland',
  city: 'London',
  postCode: 'E13 84H'
},{
  username: 'alexandriako',
  image: '/images/alexandriako.jpg',
  email: 'alexandriamhko@gmail.com',
  password: '123',
  passwordConfirmation: '123',
  description: 'Having graduated in graphic design, I currently dabble in graphic design, tattoo designs, and prints. My other passion is for furniture and interior design.',
  addressLineOne: '321 Its a Street',
  addressLineTwo: 'Hitchen',
  city: 'Brighton',
  postCode: 'BN3 4JS'
}
, {
  username: 'lunchbox',
  image: '/images/lunchbox.jpg',
  email: 'jasontrk12@gmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  description: 'I like to collect items from my travels and while spending time at local markets. Everything is either handmade or antique.',
  addressLineOne: '45678 Something Close',
  addressLineTwo: 'Cheshire',
  city: 'London',
  postCode: 'DN4 142'
}, {

  username: 'SriLankanDenzel',
  image: '/images/SriLankanDenzel.jpg',
  email: 'jasontrk@hotmail.co.uk',
  password: 'password',
  passwordConfirmation: 'password',
  description: 'Mr Boombastic, say me fantastic. Peeps my feed.',
  addressLineOne: '12 Random Street',
  addressLineTwo: 'Vibeland',
  city: 'Slough',
  postCode: 'SL4 142'
}, {
  username: 'mikedg',
  image: '/images/mikedg.jpg',
  email: 'mike@mike',
  password: 'password',
  passwordConfirmation: 'password',
  description: 'Hey gangstas. I am a world traveler, athlete, part-time magician, and artist. Check out my latest items for sale and give me a shout if you\'d like to collaborate.',
  addressLineOne: '87 Anywhere',
  addressLineTwo: 'Never Town',
  city: 'Edinbourough',
  postCode: 'EN6 142'
}, {
  username: 'jack',
  image: '/images/jack.jpg',
  email: 'jack@jack',
  password: 'password',
  passwordConfirmation: 'password',
  description: 'An avid collector of kids toys and crafts. I do not own any kids or know any. It\'s not creepy at all. ',
  addressLineOne: '87 Somewhere',
  addressLineTwo: 'Over The Rainbow',
  city: 'Grimsby',
  postCode: 'GRI M64'
}
])
.then((users) => {
  console.log(`${users.length} users created`);
  return Carousel
  .create([{
    image: '/images/carousel1.jpg',
    description: 'Text.'
  },{
    image: '/images/carousel2.jpg',
    description: 'Text1.'
  }
  , {
    image: '/images/carousel3.jpg',
    description: 'Text2.'
  }
  ])
  .then((carousels) => {
    console.log(`${carousels.length} carousels created`);
    return Product
    .create([{
      name: 'Turquoise Rings',
      category: 'Fashion',
      price: 50,
      quantity: 25,
      image: '/images/rings.jpg',
      description: 'Beautiful collection of rings made of Turquoise and hammered silver. Each ring has an adjustable band. Every stone will look different due to it being handmade.',
      createdBy: users[0]
    },{
      name: 'Rattle Bumble Bee Toy',
      category: 'Kids',
      price: 10,
      quantity: 12,
      image: '/images/rattle-bumble-beestoy.jpg',
      description: 'Realistic, Soft and Cuddly making a perfect all in one soother, calmer and toy for your little ones.A set of 3 x handmade with safety eyes , colourfull and realistic bumble bees rattle which can be hung anywhere around your baby, be it indoors on cots, swingers, chairs, bed or even outdoors on babies pram, pushchair or car seat keeping your little ones amused, soothed and interested.....A fantastic must have investment.',
      createdBy: users[5]
    }, {
      name: 'Indigo Mudcloth Pillow',
      category: 'Home & Living',
      price: 35,
      quantity: 10,
      image: '/images/indigo-pillow.png',
      description: 'Crafted from recycled African fabrics, this mudcloth pillow is handmade in my studio in Los Angeles. Each pillow is unique looking due to the nature of the fabric and comes with a pillow insert. Quantity is very limited.',
      createdBy: users[1]
    },{
      name: 'Turtle Baby Rattle Toy',
      category: 'Kids',
      price: 10,
      quantity: 14,
      image: '/images/turtle-baby-rattle-toy.jpg',
      description: 'This beautiful handmade colourful and realistic turtle rattle toy is made from 100 % cotton organic and includes high quality bpa free teething circle chain , which can be hung anywhere around your baby, be it indoors on cots, swingers, chairs, bed or even outdoors on babies pram, pushchair or car seat ultimately keeping your little ones quiet, amused, soothed and interested.....An essential must have investment.',
      createdBy: users[5]
    }, {
      name: 'Organic Baby Teething Toy',
      category: 'Kids',
      price: 20,
      quantity: 3,
      image: '/images/organic-baby-teething-toy.jpg',
      description: 'Handmade from hard wood then finished with beeswax and olive oil, this teething ring features a perfectly pink floral design in organic cotton jersey. The teether is lined with organic cotton plush which is so soft and super absorbent. ',
      createdBy: users[5]
    }, {
      name: 'Dinosaur Taggy Toy',
      category: 'Kids',
      price: 15,
      quantity: 50,
      image: '/images/dinosaur-taggy-toy.jpg',
      description: 'One for the baby palaeontologists out there, meet our Diplotagus dinosaur toy. This plush dinosaur is a taggy toy. ‘Diplotagus’ has been lovingly created using a baby blue plush fabric. The toy has ribbons firmly stitched on, forming the taggy spikes of this cuddly,prehistoric addition to our collection. The ribbons have been carefully selected to compliment the colours in the plush fabric. The ribbons are all short loops to ensure there is no risk of choking.',
      createdBy: users[5]
    }, {
      name: 'Wooden Rabbit Stacking Puzzle',
      category: 'Kids',
      price: 25,
      quantity: 10,
      image: '/images/wooden-rabbit-stacking-puzzle.jpg',
      description: 'Lovely gift idea for boys and girls.An organic, eco-friendly. Made from raw beech wood which makes him a delight to touch. The toy has been lovingly handcrafted using sustainable wood and non toxic finishes so completely safe for your child.',
      createdBy: users[5]
    },
    {
      name: 'Soft Sole French Bulldog Baby Shoes',
      category: 'Kids',
      price: 35,
      quantity: 20,
      image: '/images/french-bulldog-baby-shoes.jpg',
      description: 'This shoe is fully lined with fleece and all seams are concealed within the shoe making it more comfortable for baby to wear.The soles are a soft durable faux suede. ',
      createdBy: users[5]
    },{
      name: 'Nursery Decor Toy Camera',
      category: 'Kids',
      price: 25,
      quantity: 30,
      image: '/images/nursery-decor-toy-camera.jpg',
      description: 'Wooden camera sculpture/ toy & 3 wooden cloud baby blocks. Carefully painted & sealed with a gloss sealer.',
      createdBy: users[5]
    },{
      name: 'Mind The Gap Self Striping Sock Yarn',
      category: 'Crafts',
      price: 18,
      quantity: 25,
      image: '/images/mind-the-gap-self-striping-sock-yarn.jpg',
      description: 'This is a self striping sock yarn, which means it will pattern into bold, colourful stripes as you knit. Each stripe will be approximately six rows wide (12mm, half an inch) depending on your gauge and the number of stitches you cast on. The sequence of colours will vary between dye lots, and will not necessarily be in the same order as the sock in the photograph.',
      createdBy: users[5]
    }, {
      name: 'Knitting Kit: Beginners Super Chunky Fox ',
      category: 'Crafts',
      price: 30,
      quantity: 30,
      image: '/images/knitting-kit-beginners-super-chunky-fox.jpg',
      description: 'If you\'re crafty and love foxes then this is the project for you! It\'s a great kit for beginners or a hat that can be made up in just an evening by a more experienced knitter - I can make one in an hour!',
      createdBy: users[5]
    },{
      name: 'Knitting Kit: Fox Scarf',
      category: 'Crafts',
      price: 30,
      quantity: 30,
      image: '/images/fox_2_grande.jpg',
      description: 'If you\'re crafty and love bears then this is the project for you! It\'s a great kit for beginners or a scarf that can be made up in just an evening by a more experienced knitter.The scarf is knitted up using just the knit stitch, or \'garter\' stitch (knitting every row). The pattern includes a \'beginners\' and \'experienced\' version, both are exactly the same, however the beginners features tips to help with each part of the pattern.',
      createdBy: users[5]
    }, {
      name: 'Golden Gate Bridge Paper Model Kit',
      category: 'Crafts',
      price: 50,
      quantity: 100,
      image: '/images/golden-gate-paper-model.jpg',
      description: 'This beautiful suspension bridge is a beloved symbol of San Francisco. You can build your own Golden Gate bridge with this kit, following detailed step-by-step setup diagrams and instructions in English, German or Latvian. Now it\'s your turn time to play engineering!',
      createdBy: users[2]
    }, {
      name: 'Rice Decoupage Paper',
      category: 'Crafts',
      price: 15,
      quantity: 90,
      image: '/images/rice-decoupage-paper.jpg',
      description: 'Decoupage rice paper size 297 * 210mm (8.27 inches * 11.69 inches). Print the map in the high-end thin (about 30g density) of rice paper. Unlike mulberry paper, this paper no streaks and foreign inclusions, our paper has a uniform structure, which is very important if you want to get a flat and neat surface of the product. Paper is very convenient and practical to use - it does not tear or bubbles during application.',
      createdBy: users[2]
    }, {
      name: 'Bee Mini Sketchbook',
      category: 'Crafts',
      price: 15,
      quantity: 40,
      image: '/images/bee-mini-sketchbook.jpg',
      description: 'This handmade wire bound notebook is perfect for sketching, writing poems, scrapbooking, travel journalling and any other creative activities. The journal in A6 size contains 25 blank BROWN sheets of eco friendly recycled paper in 250gsm weight and 5 inserted pages of various gorgeous silk pressed and patterned paper.',
      createdBy: users[2]
    }, {
      name: 'Paradise Pineapple Fabric',
      category: 'Crafts',
      price: 18,
      quantity: 200,
      image: '/images/swim-fabric-paradise-pineapple .jpg',
      description: 'Sold by the 1/2 yard. For 1 yard choose a quantity of "2". Your order will be cut continuously.Tossed pineapples on black and white striped UV 50+ swimsuit fabric. Chlorine and saltwater resistant.',
      createdBy: users[0]
    }, {
      name: 'Red Mudcloth Pillow',
      category: 'Home & Living',
      price: '75',
      quantity: '5',
      image: '/images/red-pillow.png',
      description: 'Crafted from recycled African fabrics, this mudcloth pillow is handmade in my studio in Los Angeles. Each pillow is unique looking due to the nature of the fabric and comes with a pillow insert. Quantity is very limited.',
      createdBy: users[1]
    },{
      name: 'Human Skull Replica',
      category: 'Art & Collectibles',
      price: '23',
      quantity: '5',
      image: '/images/human-skull-replica.jpg',
      description: 'Realistic human skull replica, full size, made from plaster of Paris and painted for an aged, weathered appearance. The original and best selling Vicious Noodles skull, hundreds sold to satisfied customers. This item is hand-cast and hand-painted and is therefore a unique piece which will vary slightly in appearance from the photograph - the pictures give a close representation of the item you will receive.',
      createdBy: users[3]
    },{
      name: 'Pokemon Terrarium Pokeball',
      category: 'Art & Collectibles',
      price: '30',
      quantity: '10',
      image: '/images/pokemon-terrarium-pokeball.jpg',
      description: 'Pikachu pokemon terrarium. Size: The diameter is 3.93in (100mm). The balls will be sealed and do not require any maintenance and are great to have on a desk, at work, or at home.',
      createdBy: users[3]
    },{
      name: 'Skyrim Ebony Dagger',
      category: 'Art & Collectibles',
      price: '35',
      quantity: '8',
      image: '/images/skyrim-ebony-dagger.jpg',
      description: 'Wooden replica of the Ebony Dagger from Skyrim video game. This is an awesome looking item. The replica is made from wood so it is very lightweight making it perfect for cosplay and carying around conventions. The paint detail makes it look like metal. A great gift for any cosplay enthusiast or elder scrolls fan.',
      createdBy: users[3]
    },{
      name: 'Scorpion Metal Sculpture',
      category: 'Art & Collectibles',
      price: '295',
      quantity: '3',
      image: '/images/scorpion-metal-sculpture.jpg',
      description: 'Scrap metal Scorpion sculpture. Made with a selection of waste metal and then welded together. They are approximately 11.5" long, 6.5" high and weigh approximately 1.7kg. I can make them to order from the same design but each sculpture will be unique due to the materials used. This sculpture is probably not suitable for children. The sting and the pincers are sharp!',
      createdBy: users[3]
    },{
      name: 'Stormtrooper Helmet',
      category: 'Art & Collectibles',
      price: '150',
      quantity: '5',
      image: '/images/stormtrooper-helmet.jpg',
      description: 'Fully wearable stormtrooper helmet hand painted and weathered by Custom Collectables. Comes with voice changer, adjustable head strap and helmet stand. If you want a particular colour finish or weathering material, please send me a message so we can arrange your boutique item.',
      createdBy: users[3]
    },{
      name: 'Muhammad Ali Print',
      category: 'Art & Collectibles',
      price: '30',
      quantity: '20',
      image: '/images/muhammad_ali_print.jpg',
      description: 'Muhammed Ali "I am the Greatest" print. Includes black frame with white mount.',
      createdBy: users[4]
    },{
      name: 'Orgone Pyramid',
      category: 'Art & Collectibles',
      price: '128',
      quantity: '5',
      image: '/images/orgone-pyramid.jpg',
      description: 'This orgone pyramid is hand-made with loving intent. Everything is charged in the sunlight before encasing it in resin for maximum benefit. After it was made it was charged in the megalithic stone circle in lough Gur, Limerick, Ireland. It also sits on an orgone charging plate before posting. So it is full of spiritual and energetic energies. It contains chipped red carnelian gemstones, chipped gemstones, chipped sunstone gemstones, black tourmaline, moonstone tumblestones, gold flakes, terminated quartz crystal wrapped in copper wire, brass metal powder, copper metal shavings, brass metal shavings',
      createdBy: users[4]
    },{
      name: 'Nixie Clock',
      category: 'Entertainment',
      price: '130',
      quantity: '7',
      image: '/images/nixie-clock.jpg',
      description: 'Nixie Clock Features: All interaction using IR proximity sensors - no buttons or remotes. Provision for GPS time sync input 2400/4800/9600BPS. Data link can chain up to 3 clocks together into a single display. Single alarm. Display dim on/off settings. Time calibration. Individual tube brightness calibration. Ticking seconds. Low power, less than 2W and can be powered from a standard USB port. Approx. 80x145mm and 70mm high to the top of the tubes.',
      createdBy: users[3]
    },{
      name: 'LED Tetris Table',
      category: 'Entertainment',
      price: '175',
      quantity: '12',
      image: '/images/led-tetris-table.jpg',
      description: 'Arduino LED coffee table, with tetris game, beautiful bright LED illumination and cool random animations. This is a fully functional gaming console and cool coffee table. You can connect gamepad and play in retro game tetris or snake. You can use the table as a night light. Table size width: 55cm, length: 55cm, height: 45cm.',
      createdBy: users[3]
    },{
      name: 'Vintage Sony Stereo',
      category: 'Entertainment',
      price: '48',
      quantity: '1',
      image: '/images/sony-stereo-recorder.jpg',
      description: 'Sony Tapecorder TC-8 Stereo 8 Cartidge Recorder and 17 8-Tracks! Features include: Portable Built In Handle, Stereo Line Out, Stereo Auxillary In, Stereo Mic In, Plays & Records in Stereo',
      createdBy: users[2]
    },{
      name: 'Vintage Polaroid Camera',
      category: 'Entertainment',
      price: '152',
      quantity: '1',
      image: '/images/polaroid-camera.jpg',
      description: 'VINTAGE mint Polaroid Sx-70 Land Camera with tan leather body. It\'s in great condition! Bellows are in perfect condition and the glass is flawless',
      createdBy: users[2]
    },{
      name: 'Game Boy Shogo Set',
      category: 'Entertainment',
      price: '200',
      quantity: 5,
      image: '/images/gameboy-shogo.jpg',
      description: 'Go ultra geeky with this Game Boy shogo set, each wood piece carved by hand.',
      createdBy: users[3]
    },{
      name: 'Steampunk Computer Mouse',
      category: 'Entertainment',
      price: '45',
      quantity: '5',
      image: '/images/steampunk-mouse.jpg',
      description: 'Armorhamster - custom modding computer mouse with armor, gears, rivets and mechanisms imitation at steampunk style. The mouse has a laser sensor with a change of resolution 600/1000/1600 dpi and additional navigation keys. On the back of the mouse located a window with a green light.',
      createdBy: users[3]
    },{
      name: 'Sega Megadrive',
      category: 'Entertainment',
      price: '132',
      quantity: '1',
      image: '/images/sega-mega.jpg',
      description: 'Console game Sega Megadrive with cables, controllers, 1 pad and 16 vintage games. Warning, this console is in Zone Europe. The games are in french. Good condition. Works perfectly. Tested before placing the ad online. One of the two levers has the open connector, but works perfectly.',
      createdBy: users[3]
    },
    {
      name: 'Jasper Earrings',
      category: 'Fashion',
      price: '200',
      quantity: '1',
      image: '/images/green-earrings.jpg',
      description: 'One of a kind earrings.',
      createdBy: users[0]
    },{
      name: 'Born This Way Embroidered Jean Jacket',
      category: 'Fashion',
      price: 250,
      quantity: 10,
      image: '/images/bedazzled-jacket.jpg',
      description: 'A quirky addition to your wardrobe, this jean jacket is hand embroidered and bedazzled. Material is light enough for warm weather. One size fits all!',
      createdBy: users[0]
    },{
      name: 'Geometric Abstract Print',
      category: 'Home & Living',
      price: 82,
      quantity: 10,
      image: '/images/abstract-poster.jpg',
      description: 'A handrawn print of only 5 copies, this piece is limited edition. Materials used include parchment, high grade ink, and paint. It comes unframed.',
      createdBy: users[1]
    },
    {
      name: 'Nautalis Necklace',
      category: 'Fashion',
      price: 82,
      quantity: 2,
      image: '/images/nautalis-necklace.png',
      description: 'Perfect for any beach lover. My nautalis necklace is crafted from recycled shells (no critters were killed for this jewelry). The fit is shorter for this necklace as it is close to a choker.',
      createdBy: users[0]
    },
    {
      name: 'Love Poster',
      category: 'Home & Living',
      price: 35,
      quantity: 25,
      image: '/images/love-poster.jpg',
      description: 'Cute poster for the home, with the print "I fell in love here." This poster is printed onto white parchment and comes unframed.',
      createdBy: users[1]
    },
    {
      name: 'Gold & Diamond Ring',
      category: 'Fashion',
      price: 500,
      quantity: 5,
      image: '/images/diamond-ring.jpg',
      description: 'Perfect as a gift for your loved one or even as a promise ring. A 0.5 carat diamond is set in 18k gold with a matching, stackable golden band. Please enquire for sizing.',
      createdBy: users[0]
    },
    {
      name: 'Vintage Blue Chair',
      category: 'Home & Living',
      price: 32,
      quantity: 1,
      image: '/images/blue-chair.png',
      description: 'A comfy and retro chair for your living room or balcony. Blue and white mesh decorate the backrest and seat of the chair and a cantilevered base, also known as a "Floofle", supports your weight.',
      createdBy: users[1]
    }
    ]);
  });
})

.then((products) => console.log(`${products.length} products created`))
.catch((err) => console.log(err))
.finally(() => mongoose.connection.close());
