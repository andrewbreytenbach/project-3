const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: Date,
  updated_at: Date,
  entries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Entry' }]
});

const List = mongoose.model('List', listSchema);

module.exports = List;
