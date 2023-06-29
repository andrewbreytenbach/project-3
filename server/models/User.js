const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  created_at: Date,
  updated_at: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;
