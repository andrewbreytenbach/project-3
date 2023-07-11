// Entry model
const { Schema, model } = require('mongoose');

const entrySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true 
  },
  note: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const Entry = model('Entry', entrySchema);

module.exports = Entry;
