const rp = require('request-promise');
const oauth = require('../config/oauth');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function instagram(req, res, next) {
  return rp({
    method: 'POST',
    url: oauth.instagram.accessTokenURL,
    form: {
      client_id: oauth.instagram.clientId,
      client_secret: oauth.instagram.clientSecret,
      redirect_uri: 'https://wdi-27-honeypot.herokuapp.com',
      grant_type: 'authorization_code',
      code: req.body.code
    },
    json: true
  })
  .then((token) => {
    //console.log('token', token);
    return User
    .findOne({ $or: [{ instagramId: token.user.id }, { email: token.user.email }] })
      .then((user) => {
        if(!user) {
          user = new User({
            username: token.user.username,
            image: token.user.profile_picture
          });
        }
        user.instagramId = token.user.id;
        user.image = token.user.profile_picture;
        // console.log(user);
        return user.save();
      });
  })
  .then((user) => {
    // console.log(user);
    const payload = { userId: user.id };
    const token = jwt.sign(payload, secret, { expiresIn: '1hr' });

    return res.json({
      token,
      message: `Welcome back ${user.username}`
    });
  })
  .catch(next);
}

module.exports = {
  instagram
};
