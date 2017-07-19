module.exports = {
  instagram: {
    loginURL: 'https://api.instagram.com/oauth/authorize/',
    accessTokenURL: 'https://api.instagram.com/oauth/access_token',
    redirect_uri: 'https://wdi-27-honeypot.herokuapp.com',
    clientId: process.env.INSTAGRAM_CLIENT_ID_WABI_SABI,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET_WABI_SABI,
    scope: 'user:email'
  }
};
