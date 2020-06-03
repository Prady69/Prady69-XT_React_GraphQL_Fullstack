const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});

// eslint-disable-next-line import/prefer-default-export
export const User = mongoose.model('User', UserSchema);
