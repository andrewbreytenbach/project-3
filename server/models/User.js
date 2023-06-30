const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
  
  // username: String,
  // email: String,
  // password: String,
  // created_at: Date,
  // updated_at: Date
});

const User = model('User', userSchema);

module.exports = User;
