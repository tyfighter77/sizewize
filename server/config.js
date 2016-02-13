module.exports = {
  session: {
    secret: 'superSecretSecret'
  },
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 3000
};
