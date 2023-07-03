const { Schema, model } = require('mongoose');

const listSchema = new Schema({
  
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  entry: {
    type: Schema.Types.ObjectId, ref: 'Entry'
  }

  // title: String,
  // name: String,
  // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // created_at: Date,
  // updated_at: Date,
  // entries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Entry' }]
});

const List = model('List', listSchema);

module.exports = List;
