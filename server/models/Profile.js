var mongoose = require('mongoose');
var Item = require('./Item');

var profileSchema = new mongoose.Schema ({
  name: { type: String },
  genderTemplate: { type: String },
  age: { type: Number },
  region: {
    head: [Item],
    torso: [Item],
    arms: [Item],
    bottoms: [Item],
    feet: [Item]
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref:'User' }
});

module.exports = mongoose.model('Profile', profileSchema);
