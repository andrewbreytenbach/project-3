// List model
const { Schema, model } = require('mongoose');

const listSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    entries: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Entry',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

listSchema.virtual('entryCount').get(function () {
  return this.entries.length;
});

const List = model('List', listSchema);

module.exports = List;
