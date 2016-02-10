var User = require('../models/User');

module.exports = {

  create: function(req, res) {
    User.create(req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },

  read: function(req, res) {
    User.find(req.query, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },

  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },

  delete: function(req, res) {
    User.findByIdAndDelete(req.params.id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },


};
