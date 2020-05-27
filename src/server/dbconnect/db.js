const mongoose = require('mongoose');
const config = require('config');
const saveDataInMongo = require('./saveAPIDataInMongo');

const dbConfig = config.get('Characters.dbConfig');
const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.mongodbURI, {
      useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true
    });
    console.log(`DB connected at ${dbConfig.mongodbURI}`);
    saveDataInMongo(dbConfig.maxPages);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
