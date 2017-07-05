module.exports = {
  instagram: {
    loginURL: 'https://api.instagram.com/oauth/authorize/',
    accessTokenURL: 'https://api.instagram.com/oauth/access_token',
    redirect_uri: 'http://localhost:7000',
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    scope: 'user:email'
  }
};
