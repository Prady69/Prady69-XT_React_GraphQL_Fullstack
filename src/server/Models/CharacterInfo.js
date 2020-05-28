const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  image: {
    type: String
  },
  species: {
    type: String
  },
  status: {
    type: String
  },
  gender: {
    type: String
  },
  created: {
    type: Date
  },
  origin: {
    name: {
      type: String,
    },
    url: {
      type: String,
    }
  },
  location: {
    name: {
      type: String,
    },
    url: {
      type: String,
    }
  }
});

// eslint-disable-next-line import/prefer-default-export
export const Character = mongoose.model('Character', CharacterSchema);
