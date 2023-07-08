const { Schema, model } = require('mongoose');

const entrySchema = require('./Entry')

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
    type: String
  },
  entries: [entrySchema]

},
{
  toJSON: {
    virtuals: true
  },
  id: false
}
);

listSchema.virtual('entryCount').get(function(){
  return this.entry.length
})


const List = model('List', listSchema);

module.exports = List;
