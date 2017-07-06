/* globals api:ignore */
require('../helper');

const Product        = require('../../models/product');
const User        = require('../../models/user');
const jwt         = require('jsonwebtoken');
const { secret }  = require('../../config/environment');

let token;
let user;
describe('Product tests', () => {

  beforeEach(done => {
    Product.collection.drop();
    User.collection.drop();
    done();
  });

  describe('GET /api/products', () => {

    beforeEach(done => {
      User.create({
        username: 'origamiChick',
        image: '/images/origamiChick.jpg',
        email: 'mike@yahoo.com',
        password: '123',
        passwordConfirmation: '123',
        description: 'Born in LA and raised in Tokyo, I am an avid collector of vintage jewelry and handmade pieces. On the side I like to peruse for hidden gems at thrift stores. Recently my partner and I launched our own fashion label.',
        addressLineOne: '123 Awesome Lane',
        addressLineTwo: 'Maryland',
        city: 'London',
        postCode: 'E13 84H'
      }).then((users) => {
        user = users;
        console.log(`${users.length} users created`, users);
        Product.create({
          name: 'tee shirt',
          category: 'Fashion',
          price: 123,
          quantity: 12,
          image: '/images/indigo-pillow.png',
          description: 'Crafted from recycled African fabrics',
          createdBy: users._id
        }, done);
      });
    });

    it('should return a 200 response', done => {
      api.get('/api/products')
      .set('Accept', 'application/json')
      .expect(200, done);
    });

    it('should respond with a JSON object', done => {
      api.get('/api/products')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.header['content-type']).to.be.eq('application/json; charset=utf-8');
        done();
      });
    });

    it('should return an array of products', done => {
      api.get('/api/products')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
    });

    it('should return an array of product objects', done => {
      api.get('/api/products')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body)
        .and.be.an('array')
        .and.have.property(0)
        .and.have.all.keys([
          'id',
          'name',
          'category',
          'price',
          'quantity',
          'image',
          'imageSRC',
          'description',
          'createdBy'
        ]);
        done();
      });
    });
  });

  describe('POST /api/products without token', () => {

    it('should return a 401 response', done => {
      api.post('/api/products')
      .set('Accept', 'application/json')
      .send({
        product: {
          name: 'sdjfkcnd',
          category: 'fashion',
          price: 1234,
          quantity: 12,
          description: 'kdjovojnefv efvjn ewfvojnefv ewvjiwnevievj wrenvw v wrgvon',
          createdBy: user._id

        }
      }).expect(401, done);
    });

  });
  describe('POST /api/products with token', () => {

    beforeEach(done => {
      User.create({
        username: 'test',
        email: 'hello@test.com',
        password: 'password',
        passwordConfirmation: 'password',
        addressLineOne: '123 Awesome Lane',
        addressLineTwo: 'Maryland',
        city: 'London',
        postCode: 'E13 84H'
      }, (err, _user) => {
        user = _user;
        token = jwt.sign({ userId: _user._id }, secret, { expiresIn: 60*60*24 });
        console.log('this is a token ', token, user);
        done();
      });
    });

    it('should return a 201 response', done => {
      api.post('/api/products')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({

        name: 'jhjfhku',
        category: 'fashion',
        price: 1234,
        quantity: 12,
        image: '/ihygviuyiu/iuyguyg.jpg',
        description: 'kdjovojnefv efvjn ewfvojnefv ewvjiwnevievj wrenvw v wrgvon',
        createdBy: user._id



      }).expect(201, done);
    });
  });

  describe('GET /api/products/:id', () => {

    let product;

    beforeEach(done => {
      Product.create({
        name: 'jhjfhku',
        category: 'fashion',
        price: 1234,
        quantity: 12,
        image: '/ihygviuyiu/iuyguyg.jpg',
        description: 'kdjovojnefv efvjn ewfvojnefv ewvjiwnevievj wrenvw v wrgvon',
        createdBy: user._id
      }, (err, _product) => {
        product = _product;
        done();
      });
    });

    it('should return a 200 response', done => {
      api.get(`/api/products/${product.id}`)
      .set('Accept', 'application/json')
      .expect(200, done);
    });
  });

  describe('DELETE /api/products/:id without token', () => {

    let product;

    beforeEach(done => {
      Product.create({
        name: 'jhjfhku',
        category: 'fashion',
        price: 1234,
        quantity: 12,
        image: '/ihygviuyiu/iuyguyg.jpg',
        description: 'kdjovojnefv efvjn ewfvojnefv ewvjiwnevievj wrenvw v wrgvon',
        createdBy: user._id
      }, (err, _product) => {
        product = _product;
        done();
      });
    });

    it('should return a 401 response', done => {
      api.delete(`/api/products/${product.id}`)
      .set('Accept', 'application/json')
      .expect(401, done);
    });

  });

  describe('DELETE /api/products/:id with token', () => {

    beforeEach(done => {
      User.create({
        username: 'test',
        email: 'hello@test.com',
        password: 'password',
        passwordConfirmation: 'password',
        addressLineOne: '123 Awesome Lane',
        addressLineTwo: 'Maryland',
        city: 'London',
        postCode: 'E13 84H'
      }, (err, _user) => {
        user = _user;
        token = jwt.sign({ userId: _user._id }, secret, { expiresIn: 60*60*24 });
        console.log('this is a token ', token, user);
        done();
      });
    });

    it('should return a 204 response', done => {
      Product.create({
        name: 'jhjfhku',
        category: 'fashion',
        price: 1234,
        quantity: 12,
        image: '/ihygviuyiu/iuyguyg.jpg',
        description: 'kdjovojnefv efvjn ewfvojnefv ewvjiwnevievj wrenvw v wrgvon',
        createdBy: user._id
      }, (err, product) => {
        api.delete(`/api/products/${product.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(204, done);
      });
    });
  });

});
