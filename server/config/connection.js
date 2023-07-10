const mongoose = require('mongoose');

// need to add db for atlas db push to Heroku
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/diaryDB');

module.exports = mongoose.connection;
