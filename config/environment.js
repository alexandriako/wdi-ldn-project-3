const port    = process.env.PORT || 4000;
const env     = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/wabiSabi`;
// const sessionSecret = process.env.SESSION_SECRET || 'Secret';

module.exports = { port, env, dbURI };
