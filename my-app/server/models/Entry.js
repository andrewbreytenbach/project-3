const { Schema, model } = require('mongoose');

const entrySchema = new Schema({
  
  body: {
    type: String,
    required: true
  },
  note: {
    type: String,
  },
  rating: {
    type: Number,
  }
  
});
 
  
  // list_id: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
  // name: String,
  // notes: String,
  // created_at: Date,
  // updated_at: Date


const Entry = model('Entry', entrySchema);

module.exports = Entry;
