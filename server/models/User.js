const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bookCount: {
    type: Number,
    default: 0,
  },
  savedBooks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
