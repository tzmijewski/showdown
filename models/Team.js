var mongoose = require('mongoose');

//need to update the connection string to the correct mongo instance
mongoose.connect('mongodb://localhost/photo_app');

var schema = new mongoose.Schema({
  name: String,
  roster: [{Position: String, {}}]
});

module.exports = mongoose.model('Team', schema);
