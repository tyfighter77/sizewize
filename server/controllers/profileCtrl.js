var Profile = require('../models/Profile');

module.exports = {

  create: function(req, res) {
    Profile.create(req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },

  read: function(req, res) {
    Profile.find(req.query, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },

  update: function(req, res) {
    Profile.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },

  delete: function(req, res) {
    console.log(req.params.id);
    Profile.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },


};
