var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema ({
  item: { type: String},
  size: { type: String},
  desc: { type: String}
});

module.exports = itemSchema;
