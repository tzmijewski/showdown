var mongoose = require('mongoose');

//need to update the connection string to the correct mongo instance
mongoose.connect('mongodb://localhost/photo_app');

//"Player":{"GUID":"123","Name":"","Team":"","Set":"","Hand":"","Points":0,"playerPositions":[],"Speed":"","OnBase":0}}

var schema = new mongoose.Schema({
  Name: String,
  Team: String,
  Set: String,
  Hand: String,
  Points: { type: Number, default: 0 },
  playerPositions: [],
  Speed: String,
  OnBase: { type: Number, default: 0 } //include entries where there might not be them? not sure to include position specific
});

module.exports = mongoose.model('Player', schema);
