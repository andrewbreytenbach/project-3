const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  list_id: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
  name: String,
  notes: String,
  created_at: Date,
  updated_at: Date
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
